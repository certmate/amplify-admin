export const getNotifications = /* GraphQL */ `
    query GetNotifications(
        
    ){

    }
`;

export const getUser = /* GraphQL */ `
    query GetUser(
      $id: ID!
    ){
      getUser(id: $id) {
        id
        _version
        base
      }
    }
`;

export const createUserAndBase = /* GraphQL */ `
    mutation CreateUserAndBase(
    $user: CreateUserInput!
    $base: CreateBaseInput!
  ) {
    createUser(input: $user){
        id
    }
    createBase(input: $base){
        id
    }
  }
`