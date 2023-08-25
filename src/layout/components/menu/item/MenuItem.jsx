import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Menu, Tag } from "antd";
import { Bag, BagCross, BagTick, BagTimer, Book1, Category2, CloseSquare, DocumentText1, ElementPlus, Heart, Hierarchy, InfoCircle, Profile, ProfileAdd, ProfileTick, ShieldTick, TicketExpired } from "iconsax-react";
import { RoleRouteFilter, role } from "../../../../helpers";

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
            items={[
                {
                    label: 'Orders', key: 'orders', icon: notifs?.ordersAwaitingPickup ? <Badge count={notifs.ordersAwaitingPickup} /> : <Bag />, children: [
                        { label: 'All Orders', roles: ['superadmin', 'admin'], key: 'all-orders', icon: <Bag />, onClick: () => history.push('/orders/all') },
                        { label: 'Awaiting Pickup', key: 'awaiting-pickup', icon: notifs?.ordersAwaitingPickup ? <Badge count={notifs.ordersAwaitingPickup} /> : <BagTimer />, onClick: () => history.push('/orders/awaiting-pickup') },
                        { label: 'Pending Dispatch', key: 'pending-dispatch', icon: <BagTick />, onClick: () => history.push('/orders/pending-dispatch') },
                        { label: 'Rejected Pickup', key: 'rejected-pickup', icon: <BagCross />, onClick: () => history.push('/orders/rejected-pickup') },
                        { label: 'Cancelled', key: 'cancelled', icon: <CloseSquare />, onClick: () => history.push('/orders/cancelled') },
                    ].filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))
                },
                {
                    label: 'Books', roles: ['superadmin', 'admin'], key: 'books', icon: notifs?.booksAwaitingApproval ? <Badge count={notifs.booksAwaitingApproval} /> : <Book1 />, children: [
                        { label: 'Awaiting Approval', key: 'books-awaiting-approval', icon: notifs?.booksAwaitingApproval ? <Badge count={notifs.booksAwaitingApproval} /> : <ShieldTick />, onClick: () => history.push('/books/awaiting-approval') },
                        { label: 'More Info.', key: 'books-more-info', icon: <InfoCircle />, onClick: () => history.push('/books/more-info-requested') },
                        { label: 'ISBN Not Found', key: 'books-isbn-not-found', icon: <TicketExpired />, onClick: () => history.push('/books/isbn-not-found') },
                    ]
                },
                {
                    label: 'Authors', roles: ['superadmin', 'admin'], key: 'authors', icon: notifs?.authorsAwaitingApproval ? <Badge count={notifs.authorsAwaitingApproval} /> : <Profile />, children: [
                        { label: 'Awaiting Approval', key: 'authors-awaiting-approval', icon: notifs?.authorsAwaitingApproval ? <Badge count={notifs.authorsAwaitingApproval} /> : <ProfileTick />, onClick: () => history.push('/authors/awaiting-approval') },
                        { label: 'Create Author', key: 'authors-create', icon: <ProfileAdd />, onClick: () => history.push('/authors/create') }
                    ]
                },
                {
                    label: 'Genres', roles: ['superadmin', 'admin'], key: 'genres', icon: notifs?.genresAwaitingApproval ? <Badge count={notifs.authorsAwaitingApproval} /> : <Category2 />, children: [
                        { label: 'Awaiting Approval', key: 'genres-awaiting-approval', icon: notifs?.genresAwaitingApproval ? <Badge count={notifs.authorsAwaitingApproval} /> : <Category2 />, onClick: () => history.push('/genres/awaiting-approval') },
                        { label: 'Create Genre', key: 'genres-create', icon: <ElementPlus />, onClick: () => history.push('/genres/create') }
                    ]
                },
                {
                    label: 'Resources', roles: ['superadmin', 'admin'], key: 'resources', icon: <DocumentText1 />, children: [
                        {
                            label: 'User Flows', key: 'resources-flow', icon: <Hierarchy />, children: [
                                { label: 'Sign up', key: 'flow-signup', icon: <Hierarchy />, onClick: () => history.push('/resources/user-flows/sign-up') },
                                { label: 'Sign In', key: 'flow-signin', icon: <Hierarchy />, onClick: () => history.push('/resources/user-flows/sign-in') },
                                { label: 'Borrow a book', key: 'flow-borrow-a-book', icon: <Hierarchy />, onClick: () => history.push('/resources/user-flows/borrow-a-book') },
                                { label: 'Add a book', key: 'flow-add-a-book', icon: <Hierarchy />, onClick: () => history.push('/resources/user-flows/add-a-book') },
                            ].filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))
                        }
                    ]
                },
                {
                    label: 'Support', key: 'support', icon: <Heart />, children: [
                        {
                            label: 'Extensions', key: 'extensions', icon: <Heart />, children: [
                                { label: 'Extend Rental Period', key: 'support-extension-rental-period', icon: <Heart />, onClick: () => history.push('/support/extensions/extend-rental-period') },
                            ].filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))
                        }
                    ]
                }
            ].filter(({ roles, routes }) => RoleRouteFilter(roles, routes, user, null))}
        />
    );
};