import _, { first, isFunction, last, omitBy, values } from "lodash";
import { roles } from "./settings";
import { Device } from "@capacitor/device";
import { FileOpener } from "@capacitor-community/file-opener";
import { Directory, Filesystem } from "@capacitor/filesystem";

export const role = user => {
    // try{
    //     console.log((user.cognito || user).signInUserSession.accessToken.payload['cognito:groups'])
    // }
    // catch(e){}

    if (!user?.cognito)
        return "User";

    let groups = (user.cognito || user).signInUserSession.accessToken.payload['cognito:groups'];
    for (let i = 0; i < roles.length; i++) {
        const p = roles[i];
        if (groups.includes(p))
            return p
    }

    return "User";
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

export const cleanEmptyConnections = obj => {
    Object.keys(obj).forEach((key) => {
        if (key.includes('ID') && obj[key] === '') {
            delete obj[key];
        }
    });
    return obj;
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

export const numberWithCommas = x => x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

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

export const generateRandomString = ({ len = 10, onlyNumbers = false, onlyLetters = false }) => {
    const alphanumeric = onlyLetters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : onlyNumbers ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumeric.length);
        randomString += alphanumeric.charAt(randomIndex);
    }

    return randomString;
}

export const jsonToCsv = (jsonData) => {
    const data = typeof jsonData !== 'object' ? JSON.parse(jsonData) : jsonData;
    const headers = Object.keys(data[0]);

    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const field = row[header];
            return typeof field === 'undefined' ? '' : field;
        });

        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
}

export const downloadFile = async ({ fileName, fileData, fileType }) => {

    const openFile = async (filePath, contentType) => {
        try {
            await FileOpener.open({
                filePath,
                contentType
            });
        } catch (error) {
            console.error('Error opening file:', error);
        }
    };

    if ((await Device.getInfo()).platform === 'web') {
        if(typeof fileData === 'string'){
            fileData = new Blob([fileData], { type: 'text/plain;charset=utf-8' })
        }
        saveAs(fileData, fileName);
    }
    else {
        console.log('Downloading on mobile...');
        try{
            console.log({ fileData, fileName })
            let { uri } = await Filesystem.writeFile({
                path: fileName,
                data: fileData,
                directory: Directory.Documents,
                recursive: true
            });
            console.log({uri});
            await openFile(uri, fileType || 'image/png');
        }
        catch(e){
            console.log(e);
        }
    }
}

/**
 * 
 * @param {Array} roles Array of roles for which this column is to be shown. If _.isEmpty, column is shown for all users ["superadmin", "admin", "delivery"]
 * @param {Array} routes Array of routes for which this column is to be shown. If _.isEmpty, column is shown for all routes ["awaiting-pickup", "cancelled"]
 * @param {User} user Cognito User Object. If _.isEmpty, column is shown for all users
 * @param {String} filter Current route of the page. If _.isEmpty, column is shown for all routes
 * @returns Boolean
 */
export const RoleRouteFilter = (roles, routes, user, filter) => (_.isEmpty(roles) || _.isEmpty(user) || roles.includes(role(user))) && (_.isEmpty(routes) || _.isEmpty(filter) || routes.includes(filter))

export const ConditionalFilter = (condition, record) => !isFunction(condition) || condition(record);

export const isChildNode = model => model[0] === '@';

export const getModelRouteFields = ({ routes, model, fieldType }) => values(routes).filter(r => r.model === model)[0].form[fieldType].fields;

export const getParentModel = model => first(model.slice(1).split('.'));

export const getFieldsOfParentModel = model => last(model.split('.')).split(',');

export const getChildModel = model => last(model.slice(1).split('.'));

export const hasArrayOfValues = model => model.includes(":@")

export const isDisabled = (schema, field, user) => {
    if (Boolean(!schema[field]?.roles?.write)) {
        return false;
    }
    else if (!schema[field]?.roles?.write?.includes(role(user))) {
        return true;
    }
};
