// TODO Write custom actions here
/**
 * For example - sharing certs is custom only to this application
 */

import { Space } from "antd";
import { Share } from "iconsax-react";
import { isNull } from "lodash";

export const shareCert = {
    label: <Space><Share size={24} /> Share</Space>,
    condition: ({ inspector }) => !isNull(inspector),
    _fx: (cert) => {
        console.log('Share Cert', cert);
    }
}