import { Button, Modal, Space } from "antd";
import { DocumentDownload, TagCross, TickSquare } from "iconsax-react";
import { pdf, Document, Page, Text, Image, View, Font, StyleSheet, Link } from '@react-pdf/renderer';
import RobotoRegular from '../../../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../../../assets/fonts/Roboto-Bold.ttf';
import { saveAs } from 'file-saver';
import { round, unescape } from "lodash";
import clean from '../../../assets/Clean.png';
import fail from '../../../assets/Fail.png';
import { Storage } from 'aws-amplify';
import dayjs from "dayjs";
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Device } from '@capacitor/device';
import QRCode from "qrcode";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";

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

    const download = async () => {
        console.log('Downloading', data);
        // Register font
        Font.register({ family: 'Roboto', src: RobotoRegular, fontWeight: 'normal' });
        Font.register({ family: 'RobotoBold', src: RobotoBold, fontWeight: 'bold' });
        // Styles
        const styles = StyleSheet.create({
            body: {
                paddingTop: 55,
                paddingBottom: 65,
                paddingHorizontal: 55,
            },
            title: {
                fontSize: 36,
                fontFamily: 'RobotoBold',
            },
            author: {
                fontSize: 12,
                fontFamily: 'RobotoBold',
                color: '#e3221c',
                marginBottom: 10,
            },
            subtitle: {
                fontSize: 18,
                margin: 12,
                fontFamily: 'Roboto'
            },
            text: {
                margin: 12,
                fontSize: 12,
                textAlign: 'justify',
                fontFamily: 'Times-Roman'
            },
            image: {
                marginVertical: 15,
                marginHorizontal: 100,
            },
            header: {
                fontSize: 24,
                marginBottom: 30,
                marginTop: 150,
                fontFamily: 'RobotoBold',
                color: '#e3221c',
            },
            pageNumber: {
                position: 'absolute',
                fontSize: 14,
                bottom: 20,
                left: 0,
                right: 20,
                textAlign: 'right',
                fontFamily: 'RobotoBold',
                color: '#e3221c',
            },
            footerText: {
                position: 'absolute',
                fontSize: 8,
                bottom: 20,
                left: 55,
                textAlign: 'left',
                fontFamily: 'Roboto',
                color: '#c1c1c1',
            },
            footerTextBold: {
                fontSize: 8,
                fontFamily: 'RobotoBold',
                color: '#c1c1c1',
            },
            question: {
                fontWeight: "bold",
                margin: 12,
                fontSize: 12
            },
            answerTitle: {
                backgroundColor: '#716690',
                color: "#ffffff",
                fontSize: 12,
                paddingHorizontal: 8,
                paddingVertical: 4
            },
            answerBody: {
                fontSize: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                border: 1,
                borderColor: '#716690',
                borderStyle: "solid",
                marginBottom: 16
            },
            tableHeader: {
                backgroundColor: '#716690',
                color: "#ffffff",
                paddingHorizontal: 4,
                paddingVertical: 4,
                borderLeft: 0
            },
            dataCell: {
                paddingHorizontal: 4,
                paddingVertical: 4,
                border: 0,
                borderLeft: 0
            },
            table: {
                border: 0,
                borderLeft: 0
            },
            WatermarkText: {
                position: 'absolute',
                top: '50%',
                left: '30%',
                transform: "rotate(-30deg)",
                fontSize: 100,
                opacity: '0.5',
                color: '#CC0000',
                fontWeight: 'bold'
            }
        });

        const tableStyles = StyleSheet.create({
            colourHeader: {
                color: '#ffffff',
                fontFamily: 'RobotoBold',
                fontSize: 18,
                paddingVertical: 6,
                paddingHorizontal: 6
            },
            table: {
                display: "table",
                width: "auto",
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                fontSize: 10
            },
            tableRow: {
                margin: "auto",
                flexDirection: "row",
                borderLeftWidth: 0,
                borderRightWidth: 0,
            },
            tableColHeader: {
                borderStyle: 'solid',
                borderColor: '#000000',
                borderBottomColor: '#000000',
                borderWidth: 1,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                fontFamily: 'RobotoBold'
            },
            tableCell: {
                padding: 5
            },
            tableCol: {
                borderStyle: 'solid',
                borderColor: '#000000',
                borderBottomColor: '#000',
                borderWidth: 1,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                fontFamily: 'Roboto'
            },
            tableSectionHeader: {
                fontSize: 16,
                fontFamily: 'RobotoBold',
                backgroundColor: '#f3f3f3',
                padding: 5
            }
        });

        const auditSections = JSON.parse(data.auditSections || '[]');

        const inspectorSignature = await getImageUrlAndConvertToBase64(data.inspector.signature);
        const driverSignature = await getImageUrlAndConvertToBase64(data.driver.signature);

        saveAs((await html2canvas(btnRef.current)).toDataURL('image/png'), `document.png`);
        // try {
        //     await Filesystem.writeFile({
        //         path: 'certs/Document-utf8.png',
        //         data: (await html2canvas(document.body)).toDataURL('image/png'),
        //         directory: Directory.Documents,
        //         // encoding: Encoding.UTF8,
        //         recursive: true
        //     });
        // }
        // catch (e) {
        //     console.log('utf8 fail', e);
        // }
        return;
        // const vehiclePic = await getImageUrlAndConvertToBase64(data.vehiclePics?.[0]);

        const DocumentPdf = (attrs) => (
            <Document>
                <Page size="A4" style={styles.body}>
                    <View style={{ ...tableStyles.table, ...{ borderWidth: 0 } }}>
                        <View style={{ ...tableStyles.tableRow, fontSize: 16 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontFamily: 'RobotoBold', color: '#000000' }}>{data.type}</Text>
                            </View>
                            <View style={{ width: '30%', textAlign: 'right' }}>
                                <Text style={{ fontFamily: 'RobotoBold', color: '#000000' }}>#{data.number}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...tableStyles.table, ...{ borderWidth: 0 } }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ ...{ width: '50%' } }}>
                                <View style={{ ...tableStyles.table, borderRightWidth: 0, borderBottomWidth: 0 }}>
                                    {[
                                        { field: "Company Name", value: data.company.name },
                                        { field: "Operating For", value: data.Client.name },
                                        { field: "Operating Area", value: data.operatingArea },
                                        { field: "Vehicle Type", value: data.vehicle.category },
                                        { field: "Asset ID Number", value: data.vehicle.assetId },
                                        { field: "Make", value: data.vehicle.make },
                                    ].map(({ field, value }, cc) => (
                                        <View style={tableStyles.tableRow} key={cc}>
                                            <View style={{ ...tableStyles.tableColHeader, ...{ width: '50%', borderBottomWidth: field === 'Make' ? 0 : 1 } }}>
                                                <Text style={tableStyles.tableCell}>{field}</Text>
                                            </View>
                                            <View style={{ ...tableStyles.tableCol, ...{ width: '50%', borderBottomWidth: field === 'Make' ? 0 : 1 } }}>
                                                <Text style={tableStyles.tableCell}>{value}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={{ ...{ width: '50%' } }}>
                                <View style={{ ...tableStyles.table, borderBottomWidth: 0 }}>
                                    {[
                                        { field: "Date Created", value: dayjs(data.createdAt).format('DD/MM/YYYY') },
                                        { field: "Expiry Date", value: dayjs(data.createdAt).format('DD/MM/YYYY') },
                                        { field: "Vehicle Pic" },
                                        { field: "Odometer", value: data.odometer },
                                        { field: "Model", value: data.vehicle.model },
                                    ].map(({ field, value }, cc) => (
                                        <View style={tableStyles.tableRow} key={cc}>
                                            {field !== 'Vehicle Pic' ? <>
                                                <View style={{ ...tableStyles.tableColHeader, ...{ width: '50%', borderBottomWidth: field === 'Model' ? 0 : 1 } }}>
                                                    <Text style={tableStyles.tableCell}>{field}</Text>
                                                </View>
                                                <View style={{ ...tableStyles.tableCol, ...{ width: '50%', borderBottomWidth: field === 'Model' ? 0 : 1 } }}>
                                                    <Text style={tableStyles.tableCell}>{value}</Text>
                                                </View>
                                            </> : <View style={{ ...tableStyles.tableColHeader, ...{ width: '100%' } }}>
                                                <Image src={vehiclePic} style={{ height: 44.5, width: 90 }} />
                                            </View>}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...tableStyles.table, borderBottomWidth: 0 }}>
                        <View style={tableStyles.tableRow}>
                            {auditSections.map(({ title, items, result }, key) => (
                                <View key={key} style={{ width: `${100 / auditSections.length}%`, borderBottomWidth: 1, borderRightWidth: key !== auditSections.length - 1 ? 1 : 0 }}>
                                    {/* 
                                        Each audit section title + result
                                    */}
                                    <Text style={{ ...tableStyles.tableCell, fontFamily: 'RobotoBold' }}>{title}</Text>
                                    <Text style={tableStyles.tableCell}>{items.map(i => `${result === 'Clean' ? `o` : `x`} ${i}`).join('\n')}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{ ...tableStyles.table }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ backgroundColor: data.auditSections.includes('Fail') ? 'red' : 'green' }}>
                                <Text style={{ ...tableStyles.tableCell, color: 'white', textAlign: 'center' }}>
                                    This vehicle has been cleaned and inspected by a certified inspector,  and has been deemed clean and free of organic material.
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* 
                        Inspector details
                    */}
                    <View style={{ ...tableStyles.table, borderBottomWidth: 0 }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ width: `50%`, borderRightWidth: 1 }}>
                                <View>
                                    <Text style={{ ...tableStyles.tableCell, fontFamily: 'RobotoBold' }}>Inspected & Verified by,</Text>
                                </View>
                                <Text style={tableStyles.tableCell}>
                                    Name: {data.inspector.name}{`\n`}
                                    Phone: {data.inspector.phone}{`\n`}
                                    Certification No: {data.inspector.acN}{`\n`}
                                    Company: {data.company.name}{`\n`}
                                </Text>
                            </View>
                            <View style={{ width: `50%`, borderRightWidth: 0, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <Image src={inspectorSignature} style={{ height: 60, width: 60 * 2.5 }} />
                            </View>
                        </View>
                    </View>
                    {/* Comments */}
                    <View style={{ ...tableStyles.table, borderBottomWidth: 0 }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ width: `100%` }}>
                                <View>
                                    <Text style={{ ...tableStyles.tableCell, fontFamily: 'RobotoBold' }}>Inspector Comments</Text>
                                </View>
                                <Text style={tableStyles.tableCell}>
                                    {data.comments || 'No Comments'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* 
                        Driver details
                    */}
                    <View style={{ ...tableStyles.table, borderBottomWidth: 0 }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ width: `50%`, borderRightWidth: 1 }}>
                                <View>
                                    <Text style={{ ...tableStyles.tableCell, fontFamily: 'RobotoBold' }}>Driver Information</Text>
                                </View>
                                <Text style={tableStyles.tableCell}>
                                    Name: {data.driver.name}{`\n`}
                                    Phone: {data.driver.phone}{`\n`}
                                    Certification No: {data.driver.acN}{`\n`}
                                    Company: {data.company.name}{`\n`}
                                </Text>
                            </View>
                            <View style={{ width: `50%`, borderRightWidth: 0, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <Image src={driverSignature} style={{ height: 60, width: 60 * 2.5 }} />
                            </View>
                        </View>
                    </View>
                    {/* Conditions */}
                    <View style={{ ...tableStyles.table, borderBottomWidth: 1 }}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ width: `100%`, borderRightWidth: 0, borderBottomWidth: 0 }}>
                                <View>
                                    <Text style={{ ...tableStyles.tableCell, fontFamily: 'RobotoBold', color: '#ccc', fontSize: 6 }}>Conditions</Text>
                                </View>
                                <Text style={{ ...tableStyles.tableCell, color: '#ccc', fontSize: 6 }}>
                                    With a verified vehicle/plant weed hygiene inspection certificate, the driver/operator is authorised to enter worksites as long as a valid copy of this report is kept within the vehicle and/or mobile plant. This report shall be available to view upon request in the CertMate application or if printed.{`\n`}
                                    This report may be declared void if any land owner or authorised representative of land owner declares that the vehicle/mobile plant can no longer be deemed to be clean and free from organic materials.{`\n`}
                                    This report remains valid as long as the following conditions are met:{`\n`}
                                    1. The Vehicle and/or Mobile Plant does not travel off formed roads.{`\n`}
                                    2. The Vehicle and/or Mobile Plant if operating off road stays within the designated work area.{`\n`}
                                    3. The Vehicle and/or Mobile Plant does not come into direct contact with declared weeds.{`\n`}
                                    4. The driver/operator does not operate the Vehicle and/or Mobile Plant after coming into direct contact with declared weeds.{`\n`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {data.status === 'E' ? <Text style={styles.WatermarkText}>Expired</Text> : <Text></Text>}
                    <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
                        <Text style={styles.footerText}>
                            This Vehicle / Plant Weed Hygiene Inspection Certificate has been created [TIME / DATE STAMP] by Aevi Tech Pty Ltd and stored in the Certmate Cloud Server (Terms & Conditions available in CertMate application). Document uncontrolled when printed.
                        </Text>
                    )} fixed />
                </Page>
            </Document>
        );

        try {
            const doc = <DocumentPdf {...data} />;
            const asPdf = pdf([]); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            // 
            // 
            // Check device

            if ((await Device.getInfo()).platform === 'web') {
                saveAs(await asPdf.toBlob(), `Certificate.pdf`);
            }
            else {
                try {
                    await Filesystem.writeFile({
                        path: 'certs/Certificate-utf8.pdf',
                        data: await asPdf.toString(),
                        directory: Directory.Documents,
                        // encoding: Encoding.UTF8,
                        recursive: true
                    });
                }
                catch (e) {
                    console.log('utf8 fail', e);
                }

                console.log(r);
            }
        }
        catch (e) {
            console.log('>>', e);
        }
    }

    useEffect(() => {
        (async () => {
            const vehiclePic = await QRCode.toDataURL('https://www.certmate.com.au');
            setQrCode(vehiclePic);
        })()
    }, []);

    return <>
        <Space onClick={download}><DocumentDownload size={24} /> Download</Space>
        <Modal
            title={<h4 className='hp-mb-0'>Download Cert</h4>}
            open={true}
            // onCancel={hideModal}
            footer={[
                <Button key="back" onClick={async () => {
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
            <div id="nik" ref={btnRef}>
                <div class="ant-card-body"><div class="ant-row ant-row-space-between"><div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-xl-12"><img src={qrCode} /></div><div class="ant-col"><p class="hp-p1-body hp-mb-16">INVOICE NUMBER #125863478945</p></div><div class="ant-col"><p>Company name</p><p>1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p><p>demo@gmail.com</p><p>+91 919-91-91-919</p></div></div><div class="ant-divider ant-divider-horizontal" role="separator"></div><div class="ant-row ant-row-space-bewtween"><div class="ant-col hp-pb-16 hp-print-info ant-col-xs-24 ant-col-md-8"><p class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">CLIENT INFORMATION:</p><p>Edward Yildirim</p><p>1065 Atasehir/Istanbul </p><p>(123)-65202</p><p>(1234) - 567891</p><p>demo@gmail.com</p></div><div class="ant-col hp-pb-16 hp-print-info ant-col-xs-24 ant-col-md-8"><p class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">ORDER INFORMATION:</p><p>Date: November 14</p><p>Status: Pending</p><p>Id : #146859</p></div><div class="ant-col hp-text-sm-left hp-text-right hp-print-info ant-col-xs-24 ant-col-md-8"><p>Date Issue: 08/10/2019</p><p>Date Due: 08/10/2019</p></div></div><div class="ant-divider ant-divider-horizontal" role="separator"></div><div class="ant-table-wrapper"><div class="ant-spin-nested-loading"><div class="ant-spin-container"><div class="ant-table"><div class="ant-table-container"><div class="ant-table-content"><table ><colgroup></colgroup><thead class="ant-table-thead"><tr><th class="ant-table-cell">Item</th><th class="ant-table-cell">Description</th><th class="ant-table-cell">Cost</th><th class="ant-table-cell" >QTY</th><th class="ant-table-cell" >Price</th></tr></thead><tbody class="ant-table-tbody"><tr data-row-key="1" class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><p>Yoda Admin</p></td><td class="ant-table-cell"><p>HTML Admin Template</p></td><td class="ant-table-cell"><p>28 $</p></td><td class="ant-table-cell" ><p>1</p></td><td class="ant-table-cell" ><h5 class="hp-text-align-right">$ 28</h5></td></tr><tr data-row-key="2" class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><p>Logo Design</p></td><td class="ant-table-cell"><p>Guideline, Idea,Color Combinations,LogoTYPE</p></td><td class="ant-table-cell"><p>220 $</p></td><td class="ant-table-cell" ><p>1</p></td><td class="ant-table-cell" ><h5 class="hp-text-align-right">$ 220</h5></td></tr></tbody></table></div></div></div></div></div></div><div class="ant-divider ant-divider-horizontal" role="separator"></div><div class="ant-row ant-row-end"><div class="ant-col hp-pb-16 hp-print-checkout ant-col-xs-24 ant-col-sm-12 ant-col-md-6"><div class="ant-row ant-row-space-between ant-row-middle"><p class="hp-badge-text">Subtotal</p><h5 class="hp-mb-4">$ 248.00</h5></div><div class="ant-row ant-row-space-between ant-row-middle"><p class="hp-badge-text">Discount %10 </p><h5 class="hp-mb-4">-$ 24.80 </h5></div><div class="ant-row ant-row-space-between ant-row-middle"><p class="hp-badge-text">Tax %20</p><h5>$ 49.60</h5></div><div class="ant-divider ant-divider-horizontal" role="separator"></div><div class="ant-row ant-row-space-between ant-row-middle"><h5 class="hp-text-color-primary-1">Total</h5><h5 class="hp-text-color-primary-1">$ 272.80</h5></div></div></div></div>

            </div>
        </Modal>
    </>

}