import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Menu, Tag } from "antd";
import { Bag, BagCross, BagTick, BagTimer, Book1, Category2, CloseSquare, DocumentText1, ElementPlus, Heart, Hierarchy, InfoCircle, Profile, ProfileAdd, ProfileTick, ShieldTick, TicketExpired } from "iconsax-react";
import { RoleRouteFilter, role } from "../../../../helpers";
import { routes } from "../../../../settings";

const fullMenu = {
    orders: {
        header: { header: 'Orders' },
        bestCopies404: { id: 'best-copies-404', title: 'Best Copies 404', icon: <BagTimer size={18} />, navLink: '/orders/best-copies-404' },
        awaitingPickup: { id: 'awaiting-pickup', title: 'Ready for Pickup', icon: <BagTimer size={18} />, navLink: '/orders/awaiting-pickup' },
        pendingDispatch: { id: 'pending-dispatch', title: 'Pending Dispatch', icon: <BagTimer size={18} />, navLink: '/orders/pending-dispatch' },
        rejectedPickup: { id: 'rejected-pickup', title: 'Rejected Pickup', icon: <BagTimer size={18} />, navLink: '/orders/rejected-pickup' },
        cancelled: { id: 'cancelled-orders', title: 'Cancelled Orders', icon: <BagCross size={18} />, navLink: '/orders/cancelled' },
        all: { id: 'all-orders', title: 'All Orders', icon: <Bag size={18} />, navLink: '/orders/all' },
    },
    books: {
        header: { header: 'Books' },
        awaitingApproval: { id: 'books-awaiting-approval', title: 'Awaiting Approval', icon: <Book1 size={18} />, navLink: '/books/awaiting-approval' },
        moreInfo: { id: 'books-requiring-more-info', title: 'More Info. Requested', icon: <Book1 size={18} />, navLink: '/books/more-info-requested' },
        isbnNotFound: { id: 'books-isbn-not-found', title: 'ISBN not found', icon: <Book1 size={18} />, navLink: '/books/isbn-not-found' },
    },
    authors: {
        header: { header: 'Authors' },
        awaitingApproval: { id: 'authors-awaiting-approval', title: 'Awaiting Approval', icon: <Book1 size={18} />, navLink: '/authors/awaiting-approval' },
        createAuthor: { id: 'create-author', title: 'Create Author', icon: <Book1 size={18} />, navLink: '/authors/create' },
    },
    genre: {
        header: { header: 'Genre' },
        awaitingApproval: { id: 'genres-awaiting-approval', title: 'Awaiting Approval', icon: <Book1 size={18} />, navLink: '/genres/awaiting-approval' },
        createGenre: { id: 'create-genre', title: 'Create Genre', icon: <Book1 size={18} />, navLink: '/genres/create' },
    },
    userFlows: {
        header: { header: 'User Flows' },

    }
};

export default function MenuItem({ onClose }) {

    // Redux
    const user = useSelector(state => state.user)
    const notifications = useSelector(state => state.notification)

    // Location
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    // Menu
    const [notifs, setNotifs] = useState(notifications);
    const history = useNavigate()

    useEffect(() => {
        setNotifs(notifications);
    }, [notifications]);

    return (
        <Menu
            className="hp-bg-black-20 hp-bg-dark-90"
            onClick={e => console.log('click ', e)}
            defaultOpenKeys={['orders']}
            mode="inline"
            items={routes}
        />
    );
};