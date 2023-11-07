import { Card, Modal, Space } from "antd";
import { Eye } from "iconsax-react";
import { get } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { getData, readData } from "../../../common";
import { routes } from "../../../settings";
import { useSelector } from "react-redux";
import DownloadCert from "./DownloadCert";

export default function ViewFleet({ data: { name, vehicles }, hideButton }) {
    const [showModal, setShowModal] = useState(Boolean(hideButton));
    const [tableData, setTableData] = useState(null);
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
            onCancel={() => !hideButton ? setShowModal(false) : null}
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