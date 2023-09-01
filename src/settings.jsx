import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Trash, Truck } from "iconsax-react";
import { array, string } from "yup";
import { deleteColumn } from "./common";
import clients from "./data/clients";
import { Space } from "antd";

export const appName = "CertMate";
export const version = "0.1.1";
export const appType = "OAA"; // OAA, UA
export const tagline = "Digital Vehicle Biosecurity Management";
const appRoles = { owner: ["SuperAdmin", "Admin", "Support"], users: ["Inspector", "Driver", "LandOwner"] };
export const roles = [...appRoles.owner, ...appRoles.users];
/**
 * 1.   Keys of routes are names of model
 */
export const routes = {
    ['/certs']: {
        title: "Certificates",
        model: "Cert",
        filters: {
            active: {filter: { status: { eq: "A" } }, name: 'Active'},
            pending: {filter: { status: { eq: "P" } }, name: 'Pending'},
            rejected: {filter: { status: { eq: "R" } }, name: 'Rejected'},
            expired: {filter: { status: { eq: "E" } }, name: 'Expired'},
        },
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
        icon: <Profile />,
        filters: {
            invitations: { filter: { status: { eq: "I" } }, name: 'Invitations' }
        },
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                name: { label: 'Name', validation: string().required(), formComponent: 'input' },
                email: { label: 'Email', validation: string().email().required(), formComponent: 'input' },
                roles: { label: 'Roles', validation: array().of(string()), formComponent: 'select', selectOptions: appRoles.users },
                acN: { label: 'Inspector Accreditation Number', validation: string().min(3), formComponent: 'input' },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: 'select', selectOptions: '@Company.id:name' },
            },
            create: ['name', 'email', 'roles', 'acN', 'companyID'],
            read: {
                fields: ['id']
            }
        }
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
        children: [`/certs?filter=active`, `/certs?filter=pending`, `/certs?filter=rejected`, `/certs?filter=expired` ]
    },
    {
        node: '/companies',
        children: ['/companies/members', `/companies/members?filter=invitations`]
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