// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { isNull } from "lodash";
import ShareCert from "../view/components/custom/ShareCert";
import ApproveRejectCert from "../view/components/custom/ApproveRejectCert";
import DownloadCert from "../view/components/custom/DownloadCert";

export const shareCert = {
    component: ({ data, model, callback }) => <ShareCert data={data} model={model} callback={callback} />,
    condition: ({ inspector }) => true || !isNull(inspector),
}

export const approveRejectCert = {
    component: ({ data, model, callback }) => <ApproveRejectCert data={data} model={model} callback={callback} />,
    roles: ['SuperAdmin'],
    // condition: ({ inspector }) => true || !isNull(inspector),
}

export const downloadCert = {
    component: ({ data, callback }) => <DownloadCert data={data} callback={callback} />
}