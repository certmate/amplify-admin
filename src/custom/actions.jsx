// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { isNull } from "lodash";
import ShareCert from "../view/components/custom/ShareCert";
import ApproveRejectCert from "../view/components/custom/ApproveRejectCert";
import DownloadCert from "../view/components/custom/DownloadCert";
import ApproveDisapproveAsInspector from "../view/components/custom/ApproveDisapproveAsInspector";

export const shareCert = {
    component: ({ data, model, callback }) => <ShareCert data={data} model={model} callback={callback} />,
    condition: ({ inspector }) => !isNull(inspector),
}

export const approveRejectCert = {
    component: ({ data, model, callback }) => <ApproveRejectCert data={data} model={model} callback={callback} />,
    roles: ['SuperAdmin', 'Inspector'],
    // condition: ({ inspector }) => true || !isNull(inspector),
}

export const downloadCert = {
    component: ({ data, callback }) => <DownloadCert data={data} callback={callback} />,
    condition: ({ inspector }) => !isNull(inspector)
}

export const approveDisapproveAsInspector = {
    component: ({ data, callback }) => <ApproveDisapproveAsInspector data={data} callback={callback} />,
    // condition: ({ acN, approveInspector }) => !isNull(acN) && !approveInspector // Has acN and Hasn't been approved
}