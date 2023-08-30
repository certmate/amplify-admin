import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Trash, Truck } from "iconsax-react";
import { string } from "yup";
import { encodeFilter } from "./helpers";
import { deleteColumn } from "./actions";
import clients from "./data/clients";
import { Space } from "antd";

export const appName = "CertMate";
export const version = "0.1.1";
export const appType = "OAA"; // OAA, UA
export const tagline = "Digital Vehicle Biosecurity Management";
export const roles = ["SuperAdmin", "Admin", "Support", "CompanyOwner", "Inspector", "Driver", "LandOwner"];
/**
 * 1.   Keys of routes are names of model
 */
export const routes = {
    ['/certs']: {
        title: "Certificates",
        model: "Cert",
        filters: ["active", "pending", "failed", "expired"],
        icon: <DocumentText1 />,
        notificationFilter: {
            status: { eq: 'P' }
        }
    },
    ['/companies']: {
        title: "Companies",
        model: "Company",
        icon: <Profile2User />,
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                name: { label: 'Company name', validation: string().required(), formComponent: 'input' },
                logo: { label: 'Company logo', validation: string(), formComponent: 'upload', tableComponent: 'image' }
            },
            create: ['name', 'logo'],
            read: {
                fields: ['id', '_version', 'name', 'logo'],
                actions: [
                    {
                        label: <Space><Trash size={24}/> Delete</Space>,
                        fx: deleteColumn
                    }
                ]
            }
        }
    },
    ['/companies/members']: {
        title: "Members",
        model: "User",
        icon: <Profile />
    },
    ['/companies/members?filter=invited']: {
        title: "Invitations",
        model: "User",
        icon: <ProfileAdd />
    },
    ['/clients']: {
        title: "Clients",
        model: "Client",
        icon: <Building />,
        data: clients, // If data is not present, datasource is graphql
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', formComponent: null },
                _version: { hidden: true },
                name: { label: 'Company name', validation: string().required(), formComponent: 'input' },
                logo: { label: 'Company logo', validation: string(), formComponent: 'upload', tableComponent: 'image' }
            },
            read: {
                fields: ['id', 'name', 'logo', '_version'],
                actions: [
                    {
                        label: <Space><Trash size={24}/> Delete</Space>,
                        fx: deleteColumn
                    }
                ]
            }
        }
    },
    ['/vehicles']: {
        title: "Vehicles",
        model: "Vehicle",
        icon: <Truck />
    },
    ['/fleets']: {
        title: "Fleets",
        dataKey: "Company.fleets",
        icon: <Truck />
    }
}

export const menu = [
    {
        node: '/certs',
        children: [`/certs?filter=${encodeFilter({status: { eq: 'active' }}, 'Active')}`, `/certs?filter=${encodeFilter({status: { eq: 'pending' }}, 'Pending')}`, `/certs?filter=${encodeFilter({status: { eq: 'failed' }}, 'Failed')}`, `/certs?filter=${encodeFilter({status: { eq: 'expired' }}, 'Expired')}` ]
    },
    {
        node: '/companies',
        children: ['/companies/members', `/companies/members?filter=${encodeFilter({ status: 'I' }, 'Invitations')}`]
    },
    {
        node: '/clients'
    },
    {
        node: '/vehicles'
    },
    {
        node: '/fleets'
    }
]