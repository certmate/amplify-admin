// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { isNull } from "lodash";
import ShareCert from "../view/components/custom/ShareCert";
import ApproveRejectCert from "../view/components/custom/ApproveRejectCert";
import DownloadCert from "../view/components/custom/DownloadCert";
import ApproveDisapproveAsInspector from "../view/components/custom/ApproveDisapproveAsInspector";
import ViewFleet from "../view/components/custom/ViewFleet";

export const shareCert = {
    component: ({ data, model, callback }) => <ShareCert data={data} model={model} callback={callback} />,
    condition: ({ inspector }) => !isNull(inspector),
}

export const approveRejectCert = {
    component: ({ data, model, callback }) => <ApproveRejectCert data={data} model={model} callback={callback} />,
    roles: ['SuperAdmin', 'Owner', 'Inspector'],
    condition: ({ inspector, status, type }) => !['E', 'A'].includes(status) && !type?.includes('elf')
}

export const downloadCert = {
    component: ({ data, callback }) => <DownloadCert data={data} callback={callback} />,
    condition: ({ inspector, type }) => !isNull(inspector) || type.includes('elf')
}

export const approveDisapproveAsInspector = {
    component: ({ data, callback }) => <ApproveDisapproveAsInspector data={data} callback={callback} />,
    // condition: ({ acN, approveInspector }) => !isNull(acN) && !approveInspector // Has acN and Hasn't been approved
}

export const viewFleet = {
    component: data => <ViewFleet {...data} />
}