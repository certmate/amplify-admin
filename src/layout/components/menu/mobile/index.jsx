import React, { useEffect, useState } from "react";

import { Drawer } from "antd";

import MenuLogo from "../logo";
import Menu from "../Menu";
import MenuFooter from "../footer/footer";
import { CloseCircle } from "iconsax-react";
import { SafeArea } from 'capacitor-plugin-safe-area';
import { Device } from '@capacitor/device';

export default function MenuMobile(props) {
    const { onClose, visible } = props;

    useEffect(() => {
        SafeArea.getSafeAreaInsets().then(async ({ insets }) => {
            const platform = (await Device.getInfo()).platform;
            for (const [key, value] of Object.entries(insets)) {
                document.documentElement.style.setProperty(
                    `--safe-area-inset-${key}`,
                    // Safe insets for web are at 0, but we need to have a padding top on desktop
                    `${platform === 'web' && key === 'top' ? 20 : value}px`,
                );
            }
        });
    }, []);

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
            headerStyle={{ paddingTop: "var(--safe-area-inset-top)" }}
            closeIcon={<CloseCircle size={24} color="#000" />}
        >
            <Menu onClose={onClose} />

            <MenuFooter onClose={onClose} collapsed={false} />
        </Drawer>
    );
};