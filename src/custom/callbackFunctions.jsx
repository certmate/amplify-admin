// TODO Write your custom callbacks here
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