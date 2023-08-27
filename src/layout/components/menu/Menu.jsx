import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Menu as AntMenu, Tag } from "antd";
import { Bag, BagCross, BagTick, BagTimer, Book1, Building, Category2, CloseSquare, DocumentText1, ElementPlus, Heart, Hierarchy, InfoCircle, Profile, Profile2User, ProfileAdd, ProfileTick, ShieldTick, TicketExpired, Truck } from "iconsax-react";
import { RoleRouteFilter, role } from "../../../helpers";
import { keys, startCase, uniqueId, values } from "lodash";
import { routes } from "../../../settings";

export default function Menu({ }) {

    // Redux
    const user = useSelector(state => state.user);
    const notifications = useSelector(state => state.notification);
    const [notifs, setNotifs] = useState(notifications);
    const navigate = useNavigate();

    const notifOrIcon = (key, icon) => notifs?.[key] ? <Badge count={notifs[key]} /> : icon;

    const menu = useMemo(() => values(routes).map(({ title, icon, route, filters, children, roles, routes }) => {
        let item = { label: title, key: route, roles, routes, icon: notifOrIcon('', icon), children: [] }
        /**
         * Filters & Children
         */
        filters?.map(label => {
            item.children.push({ label: startCase(label), icon: notifOrIcon('', icon), key: uniqueId(), onClick: () => navigate(`/${route}?filter=${label}`) });
        });
        values(children || [])?.map(({ title, icon, route, ...child }) => {
            item.children.push({ label: startCase(title), roles: child.roles, routes: child.routes, key: uniqueId(), icon: notifOrIcon('', icon), onClick: () => navigate(`/${item.key}/${route}`) });
        });
        item.children.filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))
        // 
        // 
        if (Boolean(item.children.length)) {
            // 
            // Children exist
            item.children = item.children.filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))
            item.children.push({ label: `All ${title}`, key: `${route}-all`, icon, onClick: () => navigate(`/${route}`) });
        }
        else {
            // 
            // Children don't exist
            delete item.children;
            item.onClick = () => navigate(`/${route}`)
        }

        return item;
    }).filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null)), [notifs])

    useEffect(() => {
        setNotifs(notifications);
        console.log({ notifications });
    }, [notifications]);
    
    return (
        <AntMenu
            className="hp-bg-black-20 hp-bg-dark-90"
            openKeys={values(routes).map(({ route }) => route)}
            mode="inline"
            expandIcon={() => false}
            items={menu}
        />
    );
};