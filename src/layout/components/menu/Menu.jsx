import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Menu as AntMenu, Tag } from "antd";
import { Bag, BagCross, BagTick, BagTimer, Book1, Building, Category2, CloseSquare, DocumentText1, ElementPlus, Heart, Hierarchy, InfoCircle, Profile, Profile2User, ProfileAdd, ProfileTick, ShieldTick, TicketExpired, Truck } from "iconsax-react";
import { RoleRouteFilter, decodeFilter, role } from "../../../helpers";
import { keys, startCase, uniqueId, values } from "lodash";
import { routes, menu } from "../../../settings";

export default function Menu({ }) {

    // Redux
    const user = useSelector(state => state.user);
    const notifications = useSelector(state => state.notification);
    const [notifs, setNotifs] = useState(notifications);
    const navigate = useNavigate();

    const notifOrIcon = (key, icon) => notifs?.[key] ? <Badge count={notifs[key]} /> : icon;

    const items = useMemo(() => menu.map(({ node, children }) => {
        const { title, icon, route, filters, roles } = routes[node];
        let item = { label: title, key: node, roles, icon: notifOrIcon('', icon) }
        if (children) {
            item.children = children.map(c => {
                const [path, filter] = c.split('?filter=');
                const child = routes[path];
                return {
                    label: filter ? startCase(decodeFilter(filter).name) : child.title,
                    key: c,
                    roles: c.roles,
                    icon: notifOrIcon('', child.icon || icon),
                    onClick: () => navigate(c)
                }
            });
        }
        else {
            item.onClick = () => navigate(node);
        }

        return item;
    }).filter(({ roles, routes }) => RoleRouteFilter(roles, [], user, null)), [notifs])

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