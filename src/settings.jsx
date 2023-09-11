import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Trash, Truck } from "iconsax-react";
import { array, string } from "yup";
import { deleteColumn } from "./common";
import clients from "./data/clients";
import { Space } from "antd";
// TODO Make custom table components
import * as CustomTableCellComponent from "./view/components/custom/TableCell";

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
                logo: { label: 'Company logo', validation: string(), formComponent: 'upload', table: { component: 'image' } }
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
            invitations: { filter: { status: { eq: "I" } }, name: 'Invitations' },
            members: { filter: { status: { ne: "I" } }, name: 'Members' },
        },
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                name: { label: 'Name', validation: string().required(), formComponent: 'input' },
                email: { label: 'Email', validation: string().email().required(), formComponent: 'input' },
                roles: { label: 'Roles', validation: array().of(string()), formComponent: 'select', selectOptions: appRoles.users },
                acN: { label: 'Inspector Accreditation Number', validation: string().min(3), formComponent: 'input' },
                acnDoc: { label: 'Accreditation Certificate', validation: string(), formComponent: 'upload', table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: 'select', selectOptions: '@Company.id:name' },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: data => <CustomTableCellComponent.Company {...data} /> } },
            },
            create: ['name', 'email', 'roles', 'acN', 'acnDoc', 'companyID'],
            read: {
                fields: ['id', '_version', 'name', 'email', 'roles', 'acN', 'acnDoc', 'company.id,name,logo']
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
                logo: { label: 'Company logo', validation: string(), formComponent: 'upload', table: { component: 'image' } }
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
        /**
         * We're building our own query language and not using raw GraphQL because,
         * -    We will have to remember to add/remove all the fields
         * -    It will be messy
         */
        data: "@Company.fleets",
        // Model is Company, CRUDS only for the field fleets
        model: "@Company.fleets",
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
        children: ['/companies/members?filter=members', `/companies/members?filter=invitations`]
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