// export const getNotifications = /* GraphQL */ `
//     query GetNotifications(

//     ){

//     }
// `;

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
`;

// TODO Enter Search query
export const searchResources = /* GraphQL */ `
  query SearchResources(
    $base: ID!
    $q: String
  ){
    getBase(id: $base){
      certs(filter: {
        or: [
          { number: { contains: $q } },
          { type: { contains: $q } },
          { operatingArea: { contains: $q } },
          { client: { contains: $q } },
        ]
      }){
        items{
          id
          number
          type
          operatingArea
          client
          company{
            name
          }
        }
      }
      vehicles(filter: {
        or: [
          { make: { contains: $q } },
          { model: { contains: $q } },
          { rego: { contains: $q } },
          { category: { contains: $q } },
          { assetId: { contains: $q } },
        ]
      }){
        items{
          id
          make
          model
          rego
          category
          company{
            name
          }
        }
      }
      clients(filter: {
        or: [
          { name: { contains: $q } }
        ]
      }){
        items{
          id
          name
        }
      }
    }
  }
`;