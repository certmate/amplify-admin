import { Bag, BagCross, BagTick, BagTimer, Book1, Building, Category2, CloseSquare, DocumentText1, ElementPlus, Heart, Hierarchy, InfoCircle, Profile, Profile2User, ProfileAdd, ProfileTick, ShieldTick, TicketExpired, Truck } from "iconsax-react";

export const appName = "CertMate";
export const version = "0.1.1";
export const tagline = "Digital Vehicle Biosecurity Management";
export const roles = ["SuperAdmin", "Admin", "Support", "CompanyOwner", "Inspector", "Driver", "LandOwner"];
// Name keys as per models
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