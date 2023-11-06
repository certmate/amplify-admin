import { Button, Card, Modal, Space } from "antd";
import { DocumentDownload } from "iconsax-react";
import { Storage } from 'aws-amplify';
import { Directory, Filesystem } from '@capacitor/filesystem';
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { Device } from '@capacitor/device';
import { getStatusColorAndText } from "./CertStatus";
import './DownloadCert.less';
import dayjs from "dayjs";
import { numberWithCommas } from "../../../helpers";
import { saveAs } from 'file-saver';
import brandLogo from '../../../assets/brand.png';
import { FileOpener } from '@capacitor-community/file-opener';

const a4Dimensions = {
    width: 2480,
    padding: 72
}

const openFile = async (filePath, contentType) => {
    try {
        await FileOpener.open({
            filePath,
            contentType
        });
    } catch (error) {
        console.error('Error opening file:', error);
    }
};

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

export default function DownloadCert({ data: { id, status, type, number, createdAt, Client, vehicle, odometer, operatingArea, company, inspector, driver, comments }, callback, hideButton }) {

    const btnRef = useRef(null);
    const [qrCode, setQrCode] = useState(null);
    const [driverSignature, setDriverSignature] = useState("");
    const [inspectorSignature, setInspectorSignature] = useState("");
    const [clientLogo, setClientLogo] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [showModal, setShowModal] = useState(Boolean(hideButton));
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        showModal && (async () => {
            setQrCode(await QRCode.toDataURL(`certmate://open-cert/${id}`));
            setDriverSignature(await getImageUrlAndConvertToBase64(driver?.signature));
            setInspectorSignature(await getImageUrlAndConvertToBase64(inspector?.signature));
            setClientLogo(await getImageUrlAndConvertToBase64(Client.logo));
            setCompanyLogo(await getImageUrlAndConvertToBase64(company.logo));
        })();
    }, [showModal]);

    return <>
        {!hideButton && <Space onClick={() => setShowModal(true)}><DocumentDownload size={24} /> Download</Space>}
        <Modal
            bodyStyle={{ overflowX: 'auto', padding: 0 }}
            title={<h4 className='hp-mb-0'>Download Cert</h4>}
            open={showModal}
            onCancel={() => !hideButton ? setShowModal(false) : null}
            destroyOnClose={true}
            footer={[
                <Button key="cancel" onClick={() => setShowModal(false)}>Cancel</Button>,
                <Button key="download" type="primary" loading={downloading} onClick={async () => {
                    setDownloading(true);
                    (async () => {
                        const fileName = `certs/${number}.png`;
                        const fileData = (await html2canvas(btnRef.current)).toDataURL('image/png');
                        try {
                            if ((await Device.getInfo()).platform === 'web') {
                                saveAs(fileData, fileName);
                            }
                            else {
                                let { uri } = await Filesystem.writeFile({
                                    path: fileName,
                                    data: fileData,
                                    directory: Directory.Documents,
                                    recursive: true
                                });

                                await openFile(uri, 'image/png');
                                setDownloading(false);
                            }
                        }
                        catch (e) {
                            console.log('utf8 fail', e);
                        }
                    })()
                }}>
                    Download
                </Button>
            ]}
        >
            <div ref={btnRef} className="hp-bg-color-black-40 hp-p-24">
                <div className="hp-text-center hp-mb-16">
                    <img style={{ height: 50 }} src={brandLogo} />
                </div>
                <Card
                    className="hp-text-center hp-mb-16"
                    headStyle={{ backgroundColor: getStatusColorAndText({ status, type })[0] }}
                    title={<h4 className="hp-mb-0 hp-text-color-black-0">{getStatusColorAndText({ status, type })[1]}</h4>}
                >
                    <h3 className="hp-text-color-black-bg hp-mb-0">#{number}</h3>
                    <img src={qrCode} />
                    <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Expiry Date</p>
                    <h5 className="hp-mb-0">{dayjs(createdAt).format('DD/MM/YYYY')}</h5>
                </Card>

                <Card className="hp-mb-16">
                    <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Operating Area</p>
                        <h5 className="hp-mb-0">{operatingArea}</h5>
                    </Card.Grid>
                    <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Odometer</p>
                        <h5 className="hp-mb-0">{numberWithCommas(odometer)}</h5>
                    </Card.Grid>
                </Card>

                <Card className="hp-mb-16">
                    <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Company</p>
                        <h5 className="hp-mb-16">{company.name}</h5>
                        <img className="hp-mb-32" style={{ maxHeight: 60 }} src={companyLogo} />
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Operating For</p>
                        <h5 className="hp-mb-0">{Client.name}</h5>
                        <img className="hp-mb-32" style={{ maxHeight: 60 }} src={clientLogo} />
                    </Card.Grid>
                    <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Vehicle Rego, Make, Model</p>
                        <h5 className="hp-mb-16">{vehicle.rego}<br /> {vehicle.make}, {vehicle.model}</h5>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Vehicle Category</p>
                        <h5 className="hp-mb-0">{vehicle.category}</h5>
                    </Card.Grid>
                </Card>

                <Card>
                    <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Driver</p>
                        <h5 className="hp-mb-0">{driver?.name}</h5>
                        <img className="hp-mb-32" src={driverSignature} />
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Phone</p>
                        <h5 className="hp-mb-0">{inspector?.phone}</h5>
                    </Card.Grid>
                    {inspector && <Card.Grid style={{ width: '50%', boxShadow: 'none' }}>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Inspector</p>
                        <h5 className="hp-mb-0">{inspector?.name}</h5>
                        <img className="hp-mb-32" src={inspectorSignature} />
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Certification Number</p>
                        <h5 className="hp-mb-16">{inspector?.acN}</h5>
                        <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">Phone</p>
                        <h5 className="hp-mb-0">{inspector?.phone}</h5>
                    </Card.Grid>}
                </Card>
            </div>
        </Modal>
    </>

}