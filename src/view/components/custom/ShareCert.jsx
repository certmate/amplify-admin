import { Card, Modal, Space } from "antd";
import { Share } from "iconsax-react";
import { useState } from "react";

export default function ShareCert(data) {
    const [showShareModal, setShowShareModal] = useState(false);
    return <>
        <Space onClick={e => {
            e.stopPropagation();
            setShowShareModal(true);
            console.log("Clicked/");
        }}><Share size={24} /> Share</Space>

        <Modal
            onClick={() => e.stopPropagation()}
            title={<h4 className='hp-mb-0'>Share Certificate</h4>}
            open={showShareModal}
            onCancel={() => setShowShareModal(false)}
            footer={null}
        >
            <Card>
                Yo!
            </Card>
        </Modal>
    </>
}