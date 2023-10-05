// TODO Write your custom callbacks here
export const deleteInvitationCallback = ({ id, _version }) => {
    // 
    // Send email to user saying invite has been revoked.
    console.log("After DB delete, I will run!", id, _version);
}