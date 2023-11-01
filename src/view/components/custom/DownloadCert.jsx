import { Button, Modal, Space } from "antd";
import { DocumentDownload } from "iconsax-react";
import { Storage } from 'aws-amplify';
import { Directory, Filesystem } from '@capacitor/filesystem';
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";

const marginInPixels = 0.5 * 96; // Assuming 96 DPI for print
const a4Width = 595;
const safeWidth = a4Width - (2 * marginInPixels);

async function getImageUrlAndConvertToBase64(key) {
    const url = await Storage.get(key, { level: 'public' });
    const response = await fetch(url);
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export default function DownloadCert({ data, callback }) {

    const btnRef = useRef(null);
    const [qrCode, setQrCode] = useState(null);
    const [showModal, setShowModal] = useState(null);

    useEffect(() => {
        (async () => {
            const vehiclePic = await QRCode.toDataURL('https://www.certmate.com.au');
            setQrCode(vehiclePic);
        })()
    }, []);

    return <>
        <Space onClick={() => setShowModal(true)}><DocumentDownload size={24} /> Download</Space>
        <Modal
            bodyStyle={{ overflowX: 'auto' }}
            title={<h4 className='hp-mb-0'>Download Cert</h4>}
            open={showModal}
            onCancel={() => setShowModal(false)}
            footer={[
                <Button key="cancel" onClick={() => setShowModal(false)}>Cancel</Button>,
                <Button key="download" type="primary" onClick={async () => {
                    // saveAs((await html2canvas(btnRef.current)).toDataURL('image/png'), `document.png`);
                    try {
                        await Filesystem.writeFile({
                            path: 'certs/Document-utf8.png',
                            data: (await html2canvas(btnRef.current)).toDataURL('image/png'),
                            directory: Directory.Documents,
                            // encoding: Encoding.UTF8,
                            recursive: true
                        });
                    }
                    catch (e) {
                        console.log('utf8 fail', e);
                    }
                }}>
                    download
                </Button>
            ]}
        >
            <div style={{ width: `${safeWidth}px`, padding: `${marginInPixels}px` }} ref={btnRef}>
                <img src={qrCode} />
            </div>
        </Modal>
    </>

}