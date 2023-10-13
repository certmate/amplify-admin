import { Space } from "antd";
import { DocumentDownload } from "iconsax-react";
import { pdf, Document, Page, Text, Image, View, Font, StyleSheet, Link } from '@react-pdf/renderer';
import RobotoRegular from '../../../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../../../assets/fonts/Roboto-Bold.ttf';
import { saveAs } from 'file-saver';

export default function DownloadCert({ data, callback }) {

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
            domain: {
                fontSize: 20,
                textAlign: 'center'
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
                borderColor: '#9b9b9b',
                borderWidth: 1,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 0,
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
                borderColor: '#9b9b9b',
                borderBottomColor: '#000',
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
                borderColor: '#9b9b9b',
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


        const DocumentPdf = (attrs) => (
            <Document>
                <Page size="A4" style={styles.body}>
                    <Text style={{ fontFamily: 'RobotoBold', color: '#e3221c', marginBottom: 6 }}>Introduction</Text>
                    <Text style={{ fontSize: 12, marginBottom: 6 }}>
                        Business continuity, sustainability, profitability and growth can be affected by a wide range of factors. The purpose of our Business Assessment Tool (BAT) is to provide you with deeper insights into your ‘Business Health’ that will form the basis of creating an ongoing BAT Action Plan.
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        The BAT Action Plan will include recommendations and advice around the blind spot areas of your business that should be addressed. Additional to the BAT Action Plan you will also receive ideas and resources to provide oversight assisting maintenance of continuous and sustainable Business Improvement. The objective and desired outcome is to maximise your strengths while mitigating risk around identified weaknesses and threats.
                    </Text>
                    <Text style={{ fontFamily: 'RobotoBold', color: '#e3221c', marginBottom: 6, marginTop: 24 }}>Business Profile</Text>
                    {/* <View style={{...tableStyles.table, ...{borderWidth: 0}}}>
                        <View style={tableStyles.tableRow}>
                            <View style={{ ...{ width: '50%', padding: 5 } }}>
                                <View style={tableStyles.table}>
                                    {[
                                        { field: "Business Name", value: assessment.business_name },
                                        { field: "Advisor", value: assessment.advisor },
                                        { field: "NZBN", value: assessment.nzbn },
                                        { field: "Business Structure", value: assessment.business_structure },
                                        { field: "Staff Count", value: assessment.staff_count },
                                        { field: "Turn Over", value: assessment.turnover === 120000 ? 'Less than $120,000' : assessment.turnover === 249000 ? 'Between $120,001 - $249,000' : assessment.turnover === 499999 ? 'Between $250,000 - $499,999' : assessment.turnover === 599999 ? 'Between $500,000 - $599,999' : assessment.turnover === 1000000 ? 'Between $600,000 - $1,000,000' : assessment.turnover === 2000000 ? 'Between $1,000,000 - $2,000,000' : 'Above $2,000,000'},
                                    ].map( (c,cc)=> (
                                        <View style={tableStyles.tableRow} key={cc}>
                                            <View style={{ ...tableStyles.tableColHeader, ...{ width: '50%' } }}>
                                                <Text style={tableStyles.tableCell}>{c.field}</Text>
                                            </View>
                                            <View style={{ ...tableStyles.tableCol, ...{ width: '50%' } }}>
                                                <Text style={tableStyles.tableCell}>{c.value}</Text>
                                            </View>
                                        </View>
                                    ) )}                        
                                </View>
                            </View>
                            <View style={{ ...{ width: '50%', padding: 5 } }}>
                                <View style={tableStyles.table}>
                                    {[
                                        { field: "First Name", value: assessment.first_name },
                                        { field: "Last Name", value: assessment.last_name },
                                        { field: "Gender", value: _.startCase(assessment.gender) },
                                        { field: "Email", value: assessment.business_email },
                                        { field: "Business Region", value: assessment.business_region },
                                        { field: "Business Sector", value: assessment.business_sector },
                                        { field: "Business Identification", value: assessment.business_identification },
                                    ].map( (c,cc)=> (
                                        <View style={tableStyles.tableRow} key={cc}>
                                            <View style={{ ...tableStyles.tableColHeader, ...{ width: '50%' } }}>
                                                <Text style={tableStyles.tableCell}>{c.field}</Text>
                                            </View>
                                            <View style={{ ...tableStyles.tableCol, ...{ width: '50%' } }}>
                                                <Text style={tableStyles.tableCell}>{c.value}</Text>
                                            </View>
                                        </View>
                                    ) )}                        
                                </View>
                            </View>
                        </View>                        
                    </View> */}
                    <Text style={{ fontFamily: 'RobotoBold', color: '#e3221c', marginBottom: 6, marginTop: 24 }}>
                        Disclaimer & Acknowledgement
                    </Text>
                    <View style={{ ...tableStyles.table, ...{ borderWidth: 0 } }}>
                        <View style={{ ...tableStyles.tableRow, ...{ marginBottom: 0, paddingBottom: 0 } }}>
                            <View style={{ ...{ width: '50%', padding: 5, paddingBottom: 0, marginBottom: 0 } }}>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>
                                    Assumptions
                                </Text>
                                <Text style={{ fontSize: 7 }}>
                                    This report has been prepared on the basis that you have provided us with a full and frank disclosure of all information and other material facts which may affect the preparation of this Report. HTK Group Limited accept no responsibility or liability where full disclosure has not been made.
                                </Text>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>Copyright</Text>
                                <Text style={{ fontSize: 7 }}>
                                    Unless otherwise stated, copyright for all information on this site belongs to HTK Group Limited. HTK Group Limited grants you a limited licence to use this information for the specific purpose of providing an indicative assessment of your business health profile and to make high level recommendations as to appropriate next steps. Information in this report may not be reproduced in any other format or media with the express written permission of HTK Group Limited.
                                </Text>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>Liability</Text>
                                <Text style={{ fontSize: 7 }}>While every effort has been made to ensure the accuracy of the information and advice in the report, no liability is accepted for any incorrect statement or information within. HTK Group Limited disclaim and exclude all liability for any action, claim, loss, demand or damage of any kind (including for negligence) arising out of, or in connection with the use of this assessment and report.</Text>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>Privacy</Text>
                                <Text style={{ fontSize: 7 }}>We collect personal information from you, including information about your name, contact information, location, general business information. We collect your personal information in order to prepare the report and communicate with you from time to time as to our services including for marketing purposes.</Text>

                            </View>
                            <View style={{ ...{ width: '50%', padding: 5, paddingBottom: 0, marginBottom: 0 } }}>
                                <Text style={{ fontSize: 7 }}>
                                    Providing some information is optional. If you choose not to enter certain information requested, we'll be unable to provide the full assessment and final report. You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at info@htkgroup.co.nz or HTK Group Limited Head office, Kahakura Building, Level 1, Moorhouse Avenue, Christchurch Central, Christchurch, 8011, New Zealand. The business assessment tool also contains links to other sites that provide appropriate information. HTK Group Limited is not responsible for the privacy practices or the content of such third-party web sites.
                                </Text>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>Purpose</Text>
                                <Text style={{ fontSize: 7 }}>This report has been completed for the specific purpose of providing an assessment of your business health profile and to make high level recommendations as to appropriate next steps. No responsibility is accepted in the event that this report is used for any other purpose.</Text>
                                <Text style={{ fontFamily: 'RobotoBold', fontSize: 8, color: '#000000', marginBottom: 6, marginTop: 12 }}>Responsibility to Third Party</Text>
                                <Text style={{ fontSize: 7 }}>Our responsibility in relation to this report is limited to you to whom the report is addressed and to you only. We accept no liability to any other party, without first obtaining the written consent of HTK Group Limited. HTK Group Limited reserves the right to alter, amend, explain or limit any information given to any other party.</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.WatermarkText}>Expired</Text>
                    <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
                        <Text style={styles.footerText}>
                            This Vehicle / Plant Weed Hygiene Inspection Certificate has been created [TIME / DATE STAMP] by Aevi Tech Pty Ltd and stored in the Certmate Cloud Server (Terms & Conditions available in CertMate application). Document uncontrolled when printed.
                        </Text>
                    )} fixed />
                </Page>
            </Document>
        );

        const doc = <DocumentPdf {...data} />;
        const asPdf = pdf([]); // {} is important, throws without an argument
        asPdf.updateContainer(doc);
        const blob = await asPdf.toBlob();
        saveAs(blob, `Certificate.pdf`);
    }

    return <Space onClick={download}><DocumentDownload size={24} /> Download</Space>

}