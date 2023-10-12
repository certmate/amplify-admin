// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { Space } from "antd";
import { Share } from "iconsax-react";
import { isNull } from "lodash";
import { useState } from "react";
import ShareCert from "../view/components/custom/ShareCert";

export const shareCert = {
    component: ({ data, model, form, callback }) => <ShareCert />,
    condition: ({ inspector }) => true || !isNull(inspector),
    _fx: (cert) => {
        console.log('Share Cert', cert);
    }
}