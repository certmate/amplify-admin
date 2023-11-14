import { Button, Card, Modal, Space } from "antd";
import { Eye } from "iconsax-react";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { readData } from "../../../common";
import { routes } from "../../../settings";
import { useSelector } from "react-redux";
import DownloadCert from "./DownloadCert";
import { downloadFile, jsonToCsv } from "../../../helpers";

export default function ViewFleet({ data: { name, vehicles }, hideButton }) {
    const [showModal, setShowModal] = useState(Boolean(hideButton));
    const [tableData, setTableData] = useState(null);
    const [downloading, setDownloading] = useState(false);
    const user = useSelector(state => state.user);


    useEffect(() => {
        vehicles[0].id && showModal && (async () => {
            setTableData(await readData({ model: 'Cert', fields: routes["/certs"].form.read.fields, user, filter: { and: [{ status: { eq: 'A' } }, { or: vehicles.map(({ id }) => ({ vehicleID: { eq: id } })) }] } }));
        })();
    }, [vehicles, showModal]);

    return <>
        <Space onClick={() => setShowModal(true)}><Eye /> View</Space>
        <Modal
            bodyStyle={{ overflowX: 'auto', padding: 0 }}
            title={<h4 className='hp-mb-0'>{name}</h4>}
            open={showModal}
            footer={[
                <Button key="cancel" onClick={() => setShowModal(false)}>Cancel</Button>,
                <Button key="download" type="primary" loading={downloading} onClick={async () => {
                    /**
                     * Get vehicles, certs, cert info
                     */
                    try {
                        console.log('Downloading now');
                        downloadFile({
                            fileName: `${name}.csv`, fileData: jsonToCsv(tableData.map(t => ({
                                'Certificate No.': get(t, 'number', ''),
                                'Operating Area': get(t, 'operatingArea', ''),
                                'Type': get(t, 'type', ''),
                                'Odometer': get(t, 'odometer', ''),
                                'Vehicle Rego': get(t, 'vehicle.rego', ''),
                                'Vehicle Make/Model': [get(t, 'vehicle.make', ''), get(t, 'vehicle.model', '')].join(', '),
                                'Client': get(t, 'Client.name', ''),
                                'Inspector': get(t, 'inspector.name', ''),
                                'Driver': get(t, 'driver.name', ''),
                            }))), fileType: 'text/csv'
                        });

                        // const d = await readData({ model: 'Vehicle', fields: [ 'make', 'model', 'pic', 'rego', 'category', 'assetId', 'certs.id,status,number' ], user, filter: { or:  } })
                    }
                    catch (e) {
                        console.log(e)
                    }
                    // setDownloading(true);
                    // (async () => {
                    //     const fileName = `certs/${number}.png`;
                    //     const fileData = (await html2canvas(btnRef.current)).toDataURL('image/png');
                    //     try {
                    //         if ((await Device.getInfo()).platform === 'web') {
                    //             saveAs(fileData, fileName);
                    //         }
                    //         else {
                    //             let { uri } = await Filesystem.writeFile({
                    //                 path: fileName,
                    //                 data: fileData,
                    //                 directory: Directory.Documents,
                    //                 recursive: true
                    //             });

                    //             await openFile(uri, 'image/png');
                    //             setDownloading(false);
                    //         }
                    //     }
                    //     catch (e) {
                    //         console.log('utf8 fail', e);
                    //     }
                    // })()
                }}>
                    Download
                </Button>
            ]}
            destroyOnClose={true}
        >
            <div className="hp-bg-color-black-40 hp-p-24">
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                    {tableData?.map((t, k) => (
                        <Card title={t.number} key={k} extra={<DownloadCert data={t} />}>
                            <p>{t.vehicle.rego}</p>
                        </Card>
                    ))}
                </Space>
            </div>
        </Modal>
    </>
}