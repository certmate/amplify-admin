// TODO Write your custom callbacks here

import { cleanEmptyConnections, cleanNull, getChildModel, getParentModel, isChildNode } from "../helpers";
import { API, graphqlOperation } from 'aws-amplify';
import { concat, uniqBy, omit, pick } from "lodash";
import { getUserFromAppSync, readData } from "../common";
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
    console.log('FLEETS', );
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
            (await readData({ user, filter: null, model: 'User', fields: ['fleets.id,name,vehicles'] })).fleets
        ).filter(Boolean), 'id')
    };

    // console.log({ payload }); return;
    await API.graphql(graphqlOperation(updateUser, { input: cleanEmptyConnections(payload) }));
    // 
    await getUserFromAppSync(user.cognito);

    return;
}