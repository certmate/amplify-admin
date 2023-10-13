// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { isNull } from "lodash";
import ShareCert from "../view/components/custom/ShareCert";

export const shareCert = {
    component: ({ data, model, callback }) => <ShareCert data={data} model={model} callback={callback} />,
    condition: ({ inspector }) => true || !isNull(inspector),
}