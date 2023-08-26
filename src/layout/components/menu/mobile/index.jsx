import React from "react";

import { Drawer } from "antd";

import MenuLogo from "../logo";
import Menu from "../Menu";
import MenuFooter from "../footer/footer";
import { CloseCircle } from "iconsax-react";

export default function MenuMobile(props) {
    const { onClose, visible } = props;

    return (
        <Drawer
            title={
                <MenuLogo onClose={onClose} />
            }
            width={256}
            className="hp-mobile-sidebar hp-sidebar"
            placement="left"
            closable={true}
            onClose={onClose}
            open={visible}
            closeIcon={<CloseCircle size={24} color="#000" />}
        >
            <Menu onClose={onClose} />

            <MenuFooter onClose={onClose} collapsed={false} />
        </Drawer>
    );
};