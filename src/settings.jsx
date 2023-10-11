import { Building, DocumentText1, Profile, Profile2User, Truck } from "iconsax-react";
import { array, string } from "yup";
import { actions } from "./common";
import vehicleCategories from "./data/vehicleCategories";
import * as CustomTableCellComponent from "./view/components/custom/TableCell";
import { deleteInvitationCallback } from "./custom/callbackFunctions";

export const appName = "CertMate";
export const version = "0.1.1";
export const appType = "OAA"; // OAA, UA
export const tagline = "Digital Vehicle Biosecurity Management";
export const appRoles = { owner: ["SuperAdmin", "Admin", "Support"], users: ["Inspector", "Driver", "LandOwner"] };
export const roles = [...appRoles.owner, ...appRoles.users];
/**
 * 1.   Keys of routes are names of model
 */
export const routes = {
    ['/certs']: {
        title: "Certificates",
        model: "Cert",
        filters: {
            all: { name: 'Certs' },
            active: { filter: { status: { eq: "A" } }, name: 'Active' },
            pending: { filter: { status: { eq: "P" } }, name: 'Pending' },
            rejected: { filter: { status: { eq: "R" } }, name: 'Rejected' },
            expired: { filter: { status: { eq: "E" } }, name: 'Expired' },
        },
        icon: <DocumentText1 />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                vehicleID: { label: 'Vehicle', validation: string().required(), formComponent: { component: 'select', select: { options: '@Vehicle.id:rego' } } },
                driverID: { label: 'Driver', validation: string().required(), formComponent: { component: 'select', select: { options: '@User.id:name' } } },
                inspectorID: { label: 'Inspector', validation: string(), formComponent: { component: 'select', select: { options: '@User.id:name', filter: { roles: { contains: "Inspector" } } } } },
                type: { label: 'Type', validation: string().required(), formComponent: { component: 'select', select: { options: ['Vehicle Hygiene Certificate', 'Self Declaration'] } }, table: { columnProps: { width: 250 } } },
                odometer: { label: 'Odometer', validation: string().required(), formComponent: { component: 'input' } },
                operatingArea: { label: 'Operating Area', validation: string().required(), formComponent: { component: 'input' } },
                checkList: { label: 'Checklist', validation: string().required(), formComponent: { component: 'input' } },
                status: { label: 'Status', validation: string(), formComponent: { component: 'select', select: { options: ['Pending', 'Approved', 'Rejected'] } }, table: { component: (data, record) => <CustomTableCellComponent.CertStatus data={data} record={record} /> } },
                vehicle: { label: 'Vehicle', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Vehicle {...data} /> } },
                driver: { label: 'Driver', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.User {...data} /> } },
                inspector: { label: 'Inspector', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.User {...data} /> } },
            },
            create: {
                fields: ['companyID', 'vehicleID', 'driverID', 'inspectorID', 'type', 'odometer', 'operatingArea', 'status']
            },
            read: {
                fields: ['id', '_version', 'type', 'status', 'vehicle.rego,make,model,category', 'odometer', 'driver.id,name', 'inspector.id,name'],
                actions: [actions.delete]
            }
        },
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
                name: { label: 'Company name', validation: string().required(), formComponent: { component: 'input' } },
                logo: { label: 'Company logo', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } }
            },
            create: {
                fields: ['name', 'logo']
            },
            read: {
                fields: ['id', '_version', 'name', 'logo'],
                actions: [actions.delete]
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
                name: { label: 'Name', validation: string().required(), formComponent: { component: 'input' } },
                email: { label: 'Email', validation: string().email().required(), formComponent: { component: 'input' } },
                roles: { label: 'Roles', validation: array().of(string()), formComponent: { component: 'select', select: { options: appRoles.users } } },
                acN: { label: 'Inspector Accreditation Number', validation: string().min(3), formComponent: { component: 'input' } },
                acnDoc: { label: 'Accreditation Certificate', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Company {...data} /> } },
            },
            create: {
                routes: ['/companies/members?filter=invitations'],
                fields: ['name', 'email', 'roles', 'acN', 'acnDoc', 'companyID']
            },
            read: {
                fields: ['id', '_version', 'name', 'email', 'roles', 'acN', 'acnDoc', 'company.id,name,logo'],
                actions: [
                    { ...actions.delete, routes: ['/companies/members?filter=invitations'], fx: deleteInvitationCallback }
                ]
            }
        }
    },
    ['/clients']: {
        title: "Clients",
        model: "Client",
        icon: <Building />,
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', formComponent: null },
                _version: { hidden: true },
                name: { label: 'Client name', validation: string().required(), formComponent: { component: 'input' } },
                logo: { label: 'Client logo', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Company {...data} /> } },
            },
            create: {
                fields: ['name', 'logo', 'companyID']
            },
            read: {
                fields: ['id', 'name', 'logo', '_version', 'company.id,name,logo'],
                actions: [actions.delete, actions.update]
            }
        }
    },
    ['/vehicles']: {
        title: "Vehicles",
        model: "Vehicle",
        icon: <Truck />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                make: { label: 'Make', validation: string().required(), formComponent: { component: 'input' } },
                model: { label: 'Model', validation: string().required(), formComponent: { component: 'input' } },
                rego: { label: 'Rego', validation: string().required(), formComponent: { component: 'input' } },
                category: { label: 'Category', validation: string().required(), formComponent: { component: 'select', select: { options: vehicleCategories } } },
                assetId: { label: 'Asset ID', validation: string().required(), formComponent: { component: 'input' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component - used to display in table
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Company {...data} /> } },
            },
            create: {
                fields: ['make', 'model', 'rego', 'category', 'assetId', 'companyID'],
            },
            read: {
                fields: ['id', '_version', 'make', 'model', 'rego', 'category', 'assetId', 'company.id,name,logo'],
                actions: [actions.delete, actions.update]
            }
        }
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
        icon: <Truck />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                name: { label: 'Name', validation: string().required(), formComponent: { component: 'input' } },
                vehicles: { label: 'Vehicles', validation: array().min(1).of(string()), formComponent: { component: 'select', select: { options: '@Vehicle.id:rego' } }, table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Vehicles {...data} /> } },
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomTableCellComponent.Company {...data} /> } },
            },
            create: {
                fields: ['name', 'vehicles', 'id']
            },
            read: {
                fields: ['id', 'name', 'vehicles:@Vehicle.id,make,model,rego'],
                actions: [actions.delete, actions.update]
            }
        }
    }
}

export const menu = [
    {
        node: '/certs',
        children: [`/certs?filter=all`, `/certs?filter=active`, `/certs?filter=pending`, `/certs?filter=rejected`, `/certs?filter=expired`]
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