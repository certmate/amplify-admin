import { Building, DocumentText1, Profile, Profile2User, SecurityUser, Truck } from "iconsax-react";
import { array, boolean, string } from "yup";
import { actions } from "./common";
import vehicleCategories from "./data/vehicleCategories";
import * as CustomComponent from "./view/components/custom";
import { createFleetForUser, deleteInvitationCallback, listFleetsOfUser, sendInvitationEmailToMember } from "./custom/callbackFunctions";
import { approveRejectCert, downloadCert, approveDisapproveAsInspector, viewFleet } from "./custom/actions";
import BaseAccount from "./view/components/BaseAccount";
import { toLower, toUpper } from "lodash";
import CreateCertWizard from "./view/components/custom/CreateCertWizard";
import * as RouteComponents from "./view/components/RouteComponents";
import { numberWithCommas } from "./helpers";
import dayjs from "dayjs";

export const appName = "CertMate";
export const version = "0.1.1";
export const appType = "OAA"; // OAA, UA
export const tagline = "Digital Vehicle Biosecurity Management";
export const searchPlaceholder = "Search for Certs, Vehicles, Clients, Companies & more...";
export const appRoles = { owner: ["SuperAdmin", "Admin", "Support"], users: ["Owner", "Inspector", "Driver", "LandOwner"] };
export const roles = [...appRoles.owner, ...appRoles.users];
export const excludeModelsFromDashboardStats = ['Base', 'Index', 'Shared', 'Company'];
/**
 * Routes - names are plurals of models
 */
export const routes = {
    ['/certs']: {
        title: "Certificates",
        model: "Cert",
        component: data => <RouteComponents.Certs {...data} />,
        filters: {
            all: { name: 'Certs', roles: ['Owner', 'Inspector'] },
            active: { filter: { status: { eq: "A" } }, name: 'Active', roles: ['Owner', 'Inspector', 'Driver'] },
            pending: { filter: { status: { eq: "P" } }, name: 'Pending', roles: ['Owner', 'Inspector', 'Driver'] },
            rejected: { filter: { status: { eq: "R" } }, name: 'Rejected', roles: ['Owner', 'Inspector'] },
            expired: { filter: { status: { eq: "E" } }, name: 'Expired', roles: ['Owner', 'Inspector'] },
        },
        icon: <DocumentText1 />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                companyID: { hidden: true },
                clientID: { label: 'Client', validation: string().required(), formComponent: { component: 'select', select: { options: '@Client.id:name' } } },
                vehicleID: { label: 'Vehicle', validation: string().required(), formComponent: { component: 'select', select: { options: '@Vehicle.id:rego' } } },
                driverID: { label: 'Driver', validation: string(), formComponent: { component: 'select', select: { options: '@User.id:name' } } },
                inspectorID: { label: 'Inspector', validation: string(), formComponent: { component: 'select', select: { options: '@User.id:name', filter: { roles: { contains: "Inspector" } } } } },
                number: { label: 'Certificate Number', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                type: { label: 'Type', searchable: true, validation: string().required(), formComponent: { component: 'select', select: { options: ['Vehicle Hygiene Certificate', 'Self Declaration'] } }, table: { columnProps: { width: 250 } } },
                odometer: { label: 'Odometer', validation: string().max(7).nullable(), table: { formatter: s => numberWithCommas(s) }, formComponent: { component: 'input', formatter: s => s.replace(/[^0-9]/g, '') } },
                operatingArea: { label: 'Operating Area', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                checkList: { label: 'Checklist', validation: string(), formComponent: { component: 'input' } },
                status: { label: 'Status', validation: string(), formComponent: { component: 'select', select: { options: ['Pending', 'Approved', 'Rejected'] } }, table: { component: (data, record) => <CustomComponent.CertStatus data={data} record={record} /> } },
                vehicle: { label: 'Vehicle', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Vehicle {...data} {...record} /> } },
                driver: { label: 'Driver', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.User {...data} /> } },
                inspector: { label: 'Inspector', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.User {...data} /> } },
                client: { label: 'Client', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
                Client: { label: 'Client', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
                company: { label: 'Company', table: { columnProps: { width: 400 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
                auditSections: { label: 'Sections', validation: array().nullable(), table: { hidden: true, columnProps: { width: 400 }, component: (data, record) => <CustomComponent.AuditSections data={data} /> }, formComponent: { component: data => <CustomComponent.CreateAuditSections {...data} /> } },
                comments: { label: 'Comments', validation: string(), formComponent: { component: 'textarea' } },
                createdAt: { label: 'Created At', table: { formatter: s => dayjs(s).format('DD/MM/YYYY') } },
                vehiclePics: { label: 'Vehicle Pics', validation: array().of(string()), formComponent: { component: 'upload-multiple' }, table: { hidden: true, component: 'image' } },
            },
            create: {
                fields: ['vehicleID', 'clientID', 'driverID', 'inspectorID', 'type', 'odometer', 'operatingArea', 'number', 'auditSections.heading,result,description', 'comments', 'vehiclePics', 'companyID'],
                component: ({ callback }) => <CreateCertWizard callback={callback} />,
                roles: ['Owner', 'Inspector', 'Driver']
            },
            read: {
                fields: ['id', '_version', 'number', 'type', 'status', 'vehicle.rego,make,model,category,assetId,pic', 'auditSections', 'odometer', 'driver.id,name,signature', 'inspector.id,name,phone,acN,signature', 'Client.id,name,logo', 'operatingArea', 'createdAt', 'vehiclePics'],
                actions: [
                    { ...actions.delete, routes: ['/certs?filter=pending'] },
                    approveRejectCert,
                    downloadCert
                ],
                roles: ['Owner', 'Inspector', 'Driver'],
                search: {
                    component: {
                        title: 'number'
                    }
                },
                allowFavourites: true
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
        component: data => <RouteComponents.Companies {...data} />,
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                name: { label: 'Company name', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
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
    ['/users']: {
        title: "User Management",
        model: "User",
        icon: <Profile />,
        component: data => <RouteComponents.Users {...data} />,
        filters: {
            invitations: { filter: { status: { eq: "I" } }, name: 'Invitations' },
            members: { filter: { status: { ne: "I" } }, name: 'Members' },
        },
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null, createValue: 'email', write: true },
                _version: { hidden: true },
                name: { label: 'Name', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                email: { label: 'Email', searchable: true, validation: string().email().required(), formComponent: { component: 'input', formatter: s => toLower(s) } },
                roles: { label: 'Roles', searchable: true, validation: array().of(string()), formComponent: { component: 'select', select: { options: appRoles.users } } },
                inspectorNumber: { label: 'Inspector Passcode', searchable: true, validation: string().min(6).max(6).nullable(), formComponent: { component: 'input' } },
                acN: { label: 'Inspector Accreditation Number', searchable: true, validation: string().min(3), formComponent: { component: 'input' } },
                acnDoc: { label: 'Accreditation Certificate', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { hidden: true },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
                approveInspector: { label: 'Inspector Approval', routes: ['/users', '/users?filter=members'], validation: boolean(), formComponent: { component: 'switch' } },
            },
            create: {
                button: {
                    label: 'Add User'
                },
                fields: ['name', 'email', 'roles', 'acN', 'acnDoc', 'inspectorNumber', 'companyID'],
                afterSubmit: sendInvitationEmailToMember
            },
            read: {
                fields: ['id', '_version', 'name', 'email', 'roles', 'acN', 'acnDoc', 'inspectorNumber', 'approveInspector'],
                actions: [
                    { ...actions.delete, routes: ['/users?filter=invitations'], fx: deleteInvitationCallback },
                    { ...actions.delete, routes: ['/users?filter=members'] },
                    { ...approveDisapproveAsInspector, routes: ['/users', '/users?filter=members'] },
                ],
                search: {
                    component: {
                        title: 'name'
                    },
                    route: '/users'
                }
            }
        }
    },
    ['/clients']: {
        title: "Clients",
        model: "Client",
        icon: <Building />,
        component: data => <RouteComponents.Clients {...data} />,
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', formComponent: null, hidden: true },
                _version: { hidden: true },
                name: { label: 'Client name', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                logo: { label: 'Client logo', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                // @model.valueField:labelField
                companyID: { hidden: true },
                // Example of custom component
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
            },
            create: {
                fields: ['name', 'logo'],
                roles: ['Owner', 'Driver', 'Inspector', 'companyID']
            },
            read: {
                fields: ['id', 'name', 'logo', '_version'],
                actions: [
                    { ...actions.delete, roles: ['Owner'] },
                    { ...actions.update, roles: ['Owner'] }
                ],
                search: {
                    component: {
                        title: 'name'
                    },
                    route: '/clients'
                }
            }
        }
    },
    ['/vehicles']: {
        title: "Vehicles",
        model: "Vehicle",
        icon: <Truck />,
        component: data => <RouteComponents.Vehicles {...data} />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, createValue: 'base-rego', formComponent: null },
                _version: { hidden: true },
                make: { label: 'Make', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                model: { label: 'Model', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                pic: { label: 'Picture', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image', columnProps: { width: 250 } } },
                rego: { label: 'Rego', searchable: true, validation: string().required(), formComponent: { component: 'input', formatter: s => toUpper(s.replace(/\s+/g, '')) } },
                category: { label: 'Category', searchable: true, validation: string().required(), formComponent: { component: 'select', select: { options: vehicleCategories } } },
                assetId: { label: 'Asset ID', searchable: true, validation: string().required(), formComponent: { component: 'input' } },
                // @model.valueField:labelField
                companyID: { hidden: true },
                // Example of custom component - used to display in table
                company: { hidden: true },
                certs: { label: 'Cert', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.VehicleCert {...data} /> } }
            },
            create: {
                fields: ['make', 'model', 'rego', 'pic', 'category', 'assetId', 'companyID'],
                roles: ['Owner', 'Driver']
            },
            read: {
                fields: ['id', '_version', 'make', 'model', 'pic', 'rego', 'category', 'assetId', 'certs.id,status,number'],
                actions: [
                    { ...actions.delete, roles: ['Owner'] },
                    { ...actions.update, roles: ['Owner'] }
                ],
                allowFavourites: true,
                search: {
                    component: {
                        title: 'rego'
                    },
                    route: '/vehicles'
                }
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
        component: data => <RouteComponents.Fleets {...data} />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                name: { label: 'Name', validation: string().required(), formComponent: { component: 'input' } },
                vehicles: { label: 'Vehicles', validation: array().min(1).of(string()), formComponent: { component: 'select', select: { options: '@Vehicle.id:rego' } }, table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Vehicles {...data} /> } },
                companyID: { label: 'Company', validation: string().required(), formComponent: { component: 'select', select: { options: '@Company.id:name' } } },
                company: { label: 'Company', table: { columnProps: { width: 250 }, component: (data, record) => <CustomComponent.Company {...data} /> } },
                certs: { label: 'certs' }
            },
            create: {
                fields: ['name', 'vehicles', 'id'],
                onSubmit: {
                    ['Driver']: createFleetForUser
                },
                messages: {
                    create: 'Fleet Created',
                    update: 'Fleet Updated',
                },
                roles: ['Owner']
            },
            read: {
                fields: ['id', 'name', 'vehicles:@Vehicle.id,make,model,rego'],
                extraTableData: listFleetsOfUser,
                actions: [
                    { ...actions.update, roles: ['Owner'] },
                    { ...actions.delete, roles: ['Owner'] },
                    viewFleet
                ]
            }
        }
    },
    ['/account']: {
        title: "Account",
        model: "User",
        icon: <SecurityUser />,
        component: data => <BaseAccount {...data} />,
        form: {
            schema: {
                id: { label: 'id', hidden: true, formComponent: null },
                _version: { hidden: true },
                name: { label: 'Name', validation: string().required(), formComponent: { component: 'input' } },
                email: { label: 'Email', validation: string().required().email(), formComponent: { component: 'input' } },
                phone: { label: 'Phone', validation: string().required(), formComponent: { component: 'input' } },
                inspectorNumber: { label: 'Inspector Passcode', validation: string().min(6).nullable(), formComponent: { component: 'input' }, roles: { write: ['Owner'] } },
                profilePic: { label: 'Your Photo', validation: string(), formComponent: { component: 'upload' } },
                signature: { label: 'Signature', validation: string().required(), formComponent: { component: 'signature' } },
                roles: { label: 'Roles', validation: array().of(string()), formComponent: { component: 'select', select: { options: appRoles.users } }, roles: { write: ['Owner'] } },
                acN: { label: 'Inspector Accreditation Number', validation: string().min(3), formComponent: { component: 'input' } },
                acnDoc: { label: 'Accreditation Certificate', validation: string(), formComponent: { component: 'upload' }, table: { component: 'image' } },
                approveInspector: { label: 'Inspector Approval', validation: boolean().nullable(), formComponent: { component: 'switch' }, roles: { write: ['Owner'] } },
            },
            create: {
                fields: ['id', '_version', 'name', 'email', 'phone', 'profilePic', 'signature', 'roles', 'acN', 'acnDoc', 'approveInspector', 'inspectorNumber'],
            },
            onboardingFields: ['name', 'phone', 'signature']
        }
    }
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
            { node: `/certs?filter=all`, roles: ['Owner', 'Inspector', 'Driver'] },
            { node: `/certs?filter=active`, roles: ['Owner', 'Inspector', 'Driver'] },
            { node: `/certs?filter=pending`, roles: ['Owner', 'Inspector', 'Driver'] },
            { node: `/certs?filter=rejected`, roles: ['Owner', 'Inspector', 'Driver'] },
            { node: `/certs?filter=expired`, roles: ['Owner', 'Inspector', 'Driver'] }
        ]
    },
    {
        node: '/companies',
        children: [
            { node: `/users?filter=members` },
            { node: `/users?filter=invitations` },
        ],
        roles: ['SuperAdmin']
    },
    {
        node: '/users',
        children: [
            { node: `/users?filter=members` },
            { node: `/users?filter=invitations` },
        ],
        roles: ['Owner']
    },
    {
        node: '/clients',
        roles: ['Owner']
    },
    {
        node: '/vehicles'
    },
    {
        node: '/fleets'
    },
    {
        node: '/account'
    }
]