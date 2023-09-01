/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async event => {

  let groups = event.request.groupConfiguration.groupsToOverride;
  groups.push(event.request.userAttributes.email);
  groups.push(event.request.userAttributes.sub);

  try{
    const { data } = await axios.post(process.env.GRAPHQL_API_ENDPOINT, {
      query: `query GetUserRoles($user: ID!){ getUser(id: $user){ roles } }`,
      variables: {
        user: event.request.userAttributes.sub
      }
    }, {
      headers: { "x-api-key": process.env.GRAPHQL_API_KEY }
    });

    console.log(JSON.stringify(data));

    data.data.getUser?.roles?.forEach(r => groups.push(r));
  }
  catch(e){
    console.log(JSON.stringify(e));
  }

  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        attribute_key1: 'attribute_value1_2',
        attribute_key2: 'attribute_value2_2',
      },
      groupOverrideDetails: {
        groupsToOverride: groups,
      }
    },
  };
  // Return to Amazon Cognito
  return event;
};
