import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Badge, Menu as AntMenu } from "antd";
import { RoleRouteFilter } from "../../../helpers";
import { startCase } from "lodash";
import { routes, menu } from "../../../settings";

export default function Menu({ onClose }) {

    // Redux
    const user = useSelector(state => state.user);
    const notifications = useSelector(state => state.notification);
    const [notifs, setNotifs] = useState(notifications);
    const navigate = useNavigate();

    const notifOrIcon = (key, icon) => notifs?.[key] ? <Badge count={notifs[key]} /> : icon;

    const items = useMemo(() => menu.filter(({ roles, routes }) => RoleRouteFilter(roles, [], user, null)).map(({ node, children }) => {
        const { title, icon, roles } = routes[node];
        let item = { label: title, key: node, roles, icon: notifOrIcon('', icon) }
        if (children) {
            item.children = children.filter(({ roles }) => RoleRouteFilter(roles, [], user, null)).map(({ node }) => {
                const [path, filter] = node.split('?filter=');
                const child = routes[path];
                const { filters } = routes[path];

                return {
                    label: filter ? startCase(filters[filter].name) : child.title,
                    key: node,
                    icon: notifOrIcon('', child.icon || icon),
                    onClick: () => {
                        navigate(node);
                        onClose();
                    }
                }
            });
        }
        else {
            item.onClick = () => {
                navigate(node);
                onClose();
            }
        }

        return item;
    }), [notifs])

    useEffect(() => {
        setNotifs(notifications);
        console.log({ notifications });
    }, [notifications]);

    return (
        <AntMenu
            className="hp-bg-black-20 hp-bg-dark-90"
            openKeys={menu.filter(m => m.children).map(({ node }) => node)}
            mode="inline"
            expandIcon={() => false}
            items={items}
        />
    );
};