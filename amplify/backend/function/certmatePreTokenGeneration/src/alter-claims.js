/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
const axios = require('axios');

exports.handler = async event => {

  let groups = event.request.groupConfiguration.groupsToOverride;
  groups.push(event.request.userAttributes.email);
  groups.push(event.request.userAttributes.sub);

  try{
    const { data: { data: { getUser } } } = await axios.post(process.env.GRAPHQL_API_ENDPOINT, {
      query: `query GetUserRoles($user: ID!){ getUser(id: $user){ roles \n base\n } }`,
      variables: {
        user: event.request.userAttributes.email
      }
    }, {
      headers: { "x-api-key": process.env.GRAPHQL_API_KEY }
    });

    /**
     * If user exists, but roles are not set, make role as User
     */
    if(getUser){
      if(getUser.roles){
        getUser.roles.forEach(r => groups.push(r));
      }
      else{
        groups.push('User');
      }

      getUser?.base && groups.push(getUser.base);
    }
  }
  catch(e){
    console.log(JSON.stringify(e));
  }

  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride: groups,
      }
    },
  };
  // Return to Amazon Cognito
  return event;
};
