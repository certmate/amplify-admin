import { Building, Colorfilter, DocumentText1, Profile, Profile2User, Share, Truck } from "iconsax-react";
import { array, string } from "yup";
import { actions } from "./common";
import vehicleCategories from "./data/vehicleCategories";
import * as CustomComponent from "./view/components/custom";
import { createFleetForUser, deleteInvitationCallback, listFleetsOfUser } from "./custom/callbackFunctions";
import { shareCert, approveRejectCert, downloadCert } from "./custom/actions";

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
            all: { name: 'Certs', roles: ['Owner', 'Inspector'] },
            active: { filter: { status: { eq: "A" } }, name: 'Active', roles: ['Owner', 'Inspector'] },
            pending: { filter: { status: { eq: "P" } }, name: 'Pending', roles: ['Owner', 'Inspector'] },
            rejected: { filter: { status: { eq: "R" } }, name: 'Rejected', roles: ['Owner', 'Inspector'] },
            expired: { filter: { status: { eq: "E" } }, name: 'Expired', roles: ['Owner', 'Inspector'] },
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
                number: { label: 'Certificate Number', validation: string().required(), formComponent: { component: 'input' } },
                type: { label: 'Type', validation: string().required(), formComponent: { component: 'select', select: { options: ['Vehicle Hygiene Certificate', 'Self Declaration'] } }, table: { columnProps: { width: 250 } } },
                odometer: { label: 'Odometer', validation: string().required(), formComponent: { component: 'input' } },
                operatingArea: { label: 'Operating Area', validation: string().required(), formComponent: { component: 'input' } },
                checkList: { label: 'Checklist', validation: string().required(), formComponent: { component: 'input' } },
                status: { label: 'Status', validation: string(), formComponent: { component: 'select', select: { options: ['Pending', 'Approved', 'Rejected'] } }, table: { component: (data, record) => <CustomComponent.CertStatus data={data} record={record} /> } },
                vehicle: { label: 'Vehicle', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Vehicle {...data} /> } },
                driver: { label: 'Driver', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.User {...data} /> } },
                inspector: { label: 'Inspector', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.User {...data} /> } },
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                fields: ['companyID', 'vehicleID', 'driverID', 'inspectorID', 'type', 'odometer', 'operatingArea', 'status', 'number'],
                button: {
                    label: 'Create Cert'
                },
                roles: ['Owner', 'Inspector', 'Driver']
            },
            read: {
                fields: ['id', '_version', 'type', 'status', 'vehicle.rego,make,model,category', 'odometer', 'driver.id,name', 'inspector.id,name', 'company.id,name,logo'],
                actions: [actions.delete, actions.update, shareCert, approveRejectCert, downloadCert],
                roles: ['Owner', 'Inspector', 'Driver']
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
                id: { label: 'id', hidden: true, formComponent: null, createValue: 'email', write: true },
                _version: { hidden: true },
                name: { label: 'Name', validation: string().required(), formComponent: { component: 'input' } },
                email: { label: 'Email', validation: string().email().required(), formComponent: { component: 'input' } },
                roles: { label: 'Roles', validation: array().of(string()), formComponent: { component: 'select', select: { options: appRoles.users } } },
                acN: { label: 'Inspector Accreditation Number', validation: string().min(3), formComponent: { component: 'input' } },
                acnDoc: { label: 'Accreditation Certificate', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                routes: ['/companies/members?filter=members'],
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
                id: { label: 'id', formComponent: null, hidden: true },
                _version: { hidden: true },
                name: { label: 'Client name', validation: string().required(), formComponent: { component: 'input' } },
                logo: { label: 'Client logo', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                fields: ['name', 'logo', 'companyID'],
                roles: ['Owner']
            },
            read: {
                fields: ['id', 'name', 'logo', '_version', 'company.id,name,logo'],
                actions: [
                    {...actions.delete, roles: ['Owner']}, 
                    {...actions.update, roles: ['Owner']}
                ]
            }
        }
    },
    ['/vehicles']: {
        title: "Vehicles",
        model: "Vehicle",
        icon: <Truck />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, createValue: 'base-rego', formComponent: null },
                _version: { hidden: true },
                make: { label: 'Make', validation: string().required(), formComponent: { component: 'input' } },
                model: { label: 'Model', validation: string().required(), formComponent: { component: 'input' } },
                rego: { label: 'Rego', validation: string().required(), formComponent: { component: 'input', formatter: s => s.replace(/\s+/g, '') } },
                category: { label: 'Category', validation: string().required(), formComponent: { component: 'select', select: { options: vehicleCategories } } },
                assetId: { label: 'Asset ID', validation: string().required(), formComponent: { component: 'input' } },
                // @model.valueField:labelField
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                // Example of custom component - used to display in table
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                fields: ['make', 'model', 'rego', 'category', 'assetId', 'companyID'],
                roles: ['Owner']
            },
            read: {
                fields: ['id', '_version', 'make', 'model', 'rego', 'category', 'assetId', 'company.id,name,logo'],
                actions: [
                    {...actions.delete, roles: ['Owner']}, 
                    {...actions.update, roles: ['Owner']}
                ]
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
                vehicles: { label: 'Vehicles', validation: array().min(1).of(string()), formComponent: { component: 'select', select: { options: '@Vehicle.id:rego' } }, table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Vehicles {...data} /> } },
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                fields: ['name', 'vehicles', 'id'],
                onSubmit: {
                    ['Driver']: createFleetForUser
                }
            },
            read: {
                fields: ['id', 'name', 'vehicles:@Vehicle.id,make,model,rego'],
                extraTableData: listFleetsOfUser,
                actions: [
                    {...actions.update, roles: ['Owner']}, 
                    {...actions.delete, roles: ['Owner']}, 
                ]
            }
        }
    },
    // ['/access']: {
    //     title: "Access Control",
    //     model: "Notification",
    //     icon: <Colorfilter />,
    //     form: {
    //         schema: {
    //             id: { label: 'id', hidden: true, formComponent: null },
    //             _version: { hidden: true },
    //             type: { label: 'Type of Access', validation: string().required(), formComponent: { component: 'select', select: { options: ['SHARE'] } } },
    //             resourceID: { label: 'Resource', validation: string().required(), formComponent: { component: (data, record) => <CustomComponent.ShareResourceSelector {...data} /> } },
    //             accessLevel: { label: 'Type of Access', validation: string().required(), formComponent: { component: 'select', select: { options: ['READ', 'WRITE'] } } },
    //             toUserID: { label: 'Email address of User', validation: string().required(), formComponent: { component: 'input' } },
    //             // Example of custom component - used to display in table
    //             to: { label: 'User', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.User {...data} /> } },
    //         },
    //         create: {
    //             fields: ['type', 'resourceID', 'accessLevel', 'toUserID'],
    //             button: { label: 'Provide Access' }
    //         },
    //         read: {
    //             fields: ['id', '_version', 'type', 'resourceID', 'accessLevel', 'to.name,email'],
    //             actions: [actions.delete, actions.update]
    //         }
    //     }
    // }
}

export const menu = [
    {
        node: '/certs',
        children: [
            { node: `/certs?filter=all`, roles: ['Owner'] }, 
            { node: `/certs?filter=active`, roles: ['Owner', 'Driver'] }, 
            { node: `/certs?filter=pending`, roles: ['Owner', 'Inspector'] }, 
            { node: `/certs?filter=rejected`, roles: ['Owner', 'Inspector'] }, 
            { node: `/certs?filter=expired`, roles: ['Owner', 'Inspector'] }
        ]
    },
    {
        node: '/companies',
        children: [
            { node: `/companies/members?filter=members` }, 
            { node: `/companies/members?filter=invitations` }, 
        ],
        roles: ['Owner']
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