/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async event => {

  let groups = event.request.groupConfiguration.groupsToOverride;
  groups.push(event.request.userAttributes.email);
  groups.push(event.request.userAttributes.sub);

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
