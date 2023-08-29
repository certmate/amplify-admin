export const getNotifications = /* GraphQL */ `
    query GetNotifications(
        
    ){

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