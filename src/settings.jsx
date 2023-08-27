import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Truck } from "iconsax-react";
import { string } from "yup";

export const appName = "CertMate";
export const version = "0.1.1";
export const tagline = "Digital Vehicle Biosecurity Management";
export const roles = ["SuperAdmin", "Admin", "Support", "CompanyOwner", "Inspector", "Driver", "LandOwner"];
/**
 * 1.   Keys of routes are names of model
 */
export const routes = {
    Cert: {
        title: "Certificates",
        route: "certs",
        filters: ["active", "pending", "failed", "expired"],
        icon: <DocumentText1 />,
        notificationFilter: {
            status: { eq: 'P' }
        }
    },
    Company: {
        title: "Companies",
        route: "companies",
        icon: <Profile2User />,
        children: {
            User: {
                title: "Members",
                route: "users",
                icon: <Profile />
            },
            "invitations": {
                title: "Invitations",
                route: "invitations",
                icon: <ProfileAdd />
            }
        },
        form: {
            /**
             * Keys are names of schema field
             */
            schema: {
                id: { label: 'id', component: null },
                name: { label: 'Company name', validation: string().required(), component: 'input' },
                logo: { label: 'Company logo', validation: string(), component: 'upload' }
            },
            create: ['name', 'logo']
        }
    },
    Client: {
        title: "Clients",
        route: "clients",
        icon: <Building />
    },
    Vehicle: {
        title: "Vehicles",
        route: "vehicles",
        icon: <Truck />
    },
    Fleet: {
        title: "Fleets",
        route: "fleets",
        icon: <Truck />
    }
}