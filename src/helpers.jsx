import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs";
import { API, graphqlOperation } from 'aws-amplify';
import _ from "lodash";
import { roles } from "./settings";

export const role = user => {
    console.log({ user });
    if(!user?.cognito)
        return "user";

    let groups = (user.cognito || user).signInUserSession.accessToken.payload['cognito:groups'];
    for (let i = 0; i < roles.length; i++) {
        const p = roles[i];
        if (groups.includes(p))
            return p
    }

    return roles[roles.length - 1];
}

export const uploadImages = async (Storage, images, image_name) => {
    if (images && images.filter(g => g.file).length > 0) {
        return await new Promise(async (resolve) => {
            for (let i = 0; i < images.length; i++) {
                let image = images[i];
                if (image.file) {
                    console.log('Uploading image');
                    try {
                        let file = image.file, type = image.file.type;
                        await Storage.put(
                            image_name || image.name,
                            file,
                            {
                                acl: 'public-read',
                                cacheControl: "public, max-age=31536000", // (String) Specifies caching behavior along the request/reply chain
                                contentType: type,
                                contentDisposition: type, // (String) Specifies presentational information for the object                    
                            }
                        );
                    }
                    catch (e) {
                        console.log('Error uploading image', e);
                    }
                }
            }

            resolve();
        });
    }
    else {
        return;
    }
}

export const cleanNull = obj => {
    if (Array.isArray(obj)) {
        return obj
            .map(v => (v && typeof v === 'object') ? cleanNull(v) : v)
            .filter(v => !(v == null));
    } else {
        return Object.entries(obj)
            .map(([k, v]) => [k, v && typeof v === 'object' ? cleanNull(v) : v])
            .reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {});
    }
};

export function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener('click', clickHandler);
        }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
}

export function copyLinkToClipboard(e, l) {
    var input = document.createElement('input');
    input.setAttribute('value', l);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);


    return result;
}

export const getDomain = v => {
    try {
        return new URL(v[2] === '#' ? v.split('#')[1] : v).hostname.replace(/^www./g, '')
    }
    catch (e) {
        return "?";
    }
}

// export const getGenresFromAppSync = async (filter, sortDirection = 'ASC') => {
//     let f = [];
//     filter.forEach(ff => {
//         switch (ff) {
//             case "awaiting-approval":
//                 f.push({ status: { eq: "U" } });
//                 break;

//             case "approved":
//                 f.push({ status: { eq: "A" } });
//                 break;

//             default:
//                 filter && f.push(ff);
//                 break;
//         }
//     })

//     try {
//         const { data } = await API.graphql(graphqlOperation(getGenres, { filter: !_.isEmpty(f) ? { and: f.filter(Boolean) } : null, sortDirection: sortDirection }));
//         return data.getIndex.genres.items.map((b, i) => ({ ...b, genre: _.startCase(_.lowerCase(b.genre)), key: i }));
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

export const isVisible = el => el.offsetWidth > 0 && el.offsetHeight > 0;

/**
 * 
 * @param {Array} roles Array of roles for which this column is to be shown. If _.isEmpty, column is shown for all users ["superadmin", "admin", "delivery"]
 * @param {Array} routes Array of routes for which this column is to be shown. If _.isEmpty, column is shown for all routes ["awaiting-pickup", "cancelled"]
 * @param {User} user Cognito User Object. If _.isEmpty, column is shown for all users
 * @param {String} filter Current route of the page. If _.isEmpty, column is shown for all routes
 * @returns Boolean
 */
export const RoleRouteFilter = ( roles, routes, user, filter ) => (_.isEmpty(roles) || _.isEmpty(user) || roles.includes(role(user))) && (_.isEmpty(routes) || _.isEmpty(filter) || routes.includes(filter))

export const encodeFilter = (filter, name) => encodeURI(JSON.stringify({ filter, name }));
export const decodeFilter = filter => JSON.parse(decodeURI(filter));