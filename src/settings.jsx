import { Building, DocumentText1, Profile, Profile2User, ProfileAdd } from "iconsax-react";

const roles = {
    superAdmin: "SuperAdmin",
    admin: "Admin",
    support: "Support",
    companyOwner: "CompanyOwner",
    inspector: "Inspector",
    driver: "Driver",
    landOwner: "LandOwner"
}

export const appName = "CertMate";
export const version = "0.1.1";
export const tagline = "Digital Vehicle Biosecurity Management";
export const logo = "";

export const precedence = Object.values(roles);

export const routes = [
    {
        label: "Certificates", key: "certs", roles: [], icon: <DocumentText1 />, children: [
            { label: "Active", key: "certs-active", icon: <DocumentText1 /> },
            { label: "Pending", key: "certs-pending", icon: <DocumentText1 /> },
            { label: "Failed", key: "certs-failed", icon: <DocumentText1 /> },
            { label: "Expired", key: "certs-expired", icon: <DocumentText1 /> },
        ]
    },
    {
        label: "Company", key: "company", roles: [], icon: <Profile2User />, children: [
            { label: "Members", key: "company-members", icon: <Profile /> },
            { label: "Invitations", key: "company-invitations", icon: <ProfileAdd /> },
        ]
    },
    {
        label: "Clients", key: "clients", roles: [], icon: <Building />
    },
    // {
    //     label: "", key: "", roles: [], icon: <></>, children: [
    //         { label: "", key: "", icon: <></> },
    //         { label: "", key: "", icon: <></> },
    //         { label: "", key: "", icon: <></> },
    //         { label: "", key: "", icon: <></> }
    //     ]
    // }
];