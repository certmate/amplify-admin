// TODO Write your custom callbacks here

import { cleanEmptyConnections, cleanNull } from "../helpers";
import { API, graphqlOperation } from 'aws-amplify';
import { concat, uniqBy, omit, find } from "lodash";
import { getData, getUserFromAppSync } from "../common";
import { updateUser } from "../graphql/mutations";
import { v4 } from "uuid";

/**
 * These function are used to trigger custom callbacks to common functions - like Delete.
 * 
 * For example - A delete function will delete an entry from AppSync, but when an invitation is deleted, an email has to be sent to the invitee.
 * 
 * 
 */
export const deleteInvitationCallback = ({ id, _version }) => {
    // 
    // Send email to user saying invite has been revoked.
    console.log("After DB delete, I will run!", id, _version);
}

export const createFleetForUser = async ({ model, values, fields, user, readFields }) => {
    console.log('FLEETS',);
    /**
     * Structure payload
     */
    const payload = {
        // id, _version of model
        id: user.appsync.id,
        _version: user.appsync._version,
        // New + Existing
        fleets: uniqBy(concat(
            // Set id if id field
            [cleanNull({ ...omit(values, ['parent']), id: fields.includes('id') ? values.id || v4() : null })],
            (await getData({ model: 'User', fields: ['fleets.id,name,vehicles'], id: user.appsync.id }))?.fleets
        ).filter(Boolean), 'id')
    };

    // console.log({ payload }); return;
    await API.graphql(graphqlOperation(updateUser, { input: cleanEmptyConnections(payload) }));
    // 
    await getUserFromAppSync(user.cognito);

    return;
}

export const listFleetsOfUser = async ({ user }) => (await getData({ model: 'User', fields: ['fleets.id,name,vehicles'], id: user.appsync.id }))?.fleets;

export const sendInvitationEmailToMember = async ({ user, values: { email, companyID } }) => {
    console.log('Inviting', { user, email, company: (await getData({ model: 'Company', fields: ['name'], id: companyID })) });
    await fetch(`https://ec756zash6.execute-api.ap-southeast-2.amazonaws.com/certmateInviteUser-dev`, {
        method: 'POST',
        body: JSON.stringify({
            user: user.appsync.name,
            to: email,
            company: (await getData({ model: 'Company', fields: ['name'], id: companyID })).name
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}