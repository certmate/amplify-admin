/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIndex = /* GraphQL */ `
  query GetIndex($id: ID!) {
    getIndex(id: $id) {
      id
      bases {
        items {
          id
          read
          createdAt
          bID
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companies {
            items {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listIndices = /* GraphQL */ `
  query ListIndices(
    $filter: ModelIndexFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bases {
          items {
            id
            read
            createdAt
            bID
            users {
              nextToken
              startedAt
              __typename
            }
            companies {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncIndices = /* GraphQL */ `
  query SyncIndices(
    $filter: ModelIndexFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIndices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bases {
          items {
            id
            read
            createdAt
            bID
            users {
              nextToken
              startedAt
              __typename
            }
            companies {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBase = /* GraphQL */ `
  query GetBase($id: ID!) {
    getBase(id: $id) {
      id
      read
      createdAt
      bID
      users {
        items {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      companies {
        items {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      vehicles {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      certs {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          vehicleID
          vehicle {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          driverID
          driver {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          inspectorID
          inspector {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          type
          odometer
          client
          operatingArea
          checkList
          status
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          type
          title
          body
          userID
          user {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listBases = /* GraphQL */ `
  query ListBases(
    $filter: ModelBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        read
        createdAt
        bID
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companies {
          items {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBases = /* GraphQL */ `
  query SyncBases(
    $filter: ModelBaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        read
        createdAt
        bID
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companies {
          items {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const basesByBIDAndCreatedAt = /* GraphQL */ `
  query BasesByBIDAndCreatedAt(
    $bID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    basesByBIDAndCreatedAt(
      bID: $bID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        read
        createdAt
        bID
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companies {
          items {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      pushToken
      email
      phone
      roles
      acN
      acnDoc
      createdAt
      updatedAt
      favouriteCerts
      fleets {
        id
        name
        vehicles
        __typename
      }
      status
      driverCerts {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          vehicleID
          vehicle {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          driverID
          driver {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          inspectorID
          inspector {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          type
          odometer
          client
          operatingArea
          checkList
          status
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      inspectorCerts {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          vehicleID
          vehicle {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          driverID
          driver {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          inspectorID
          inspector {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          type
          odometer
          client
          operatingArea
          checkList
          status
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          type
          title
          body
          userID
          user {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      companyID
      company {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      base
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersByCompanyIDAndUpdatedAt = /* GraphQL */ `
  query UsersByCompanyIDAndUpdatedAt(
    $companyID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCompanyIDAndUpdatedAt(
      companyID: $companyID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersByBaseAndName = /* GraphQL */ `
  query UsersByBaseAndName(
    $base: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByBaseAndName(
      base: $base
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      users {
        items {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      vehicles {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      certs {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          vehicleID
          vehicle {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          driverID
          driver {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          inspectorID
          inspector {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          type
          odometer
          client
          operatingArea
          checkList
          status
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fleets {
        id
        name
        vehicles
        __typename
      }
      createdAt
      updatedAt
      logo
      base
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const companiesByBaseAndName = /* GraphQL */ `
  query CompaniesByBaseAndName(
    $base: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companiesByBaseAndName(
      base: $base
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      companyID
      company {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      make
      model
      rego
      category
      assetId
      certs {
        items {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          vehicleID
          vehicle {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          driverID
          driver {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          inspectorID
          inspector {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          type
          odometer
          client
          operatingArea
          checkList
          status
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      base
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        make
        model
        rego
        category
        assetId
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVehicles = /* GraphQL */ `
  query SyncVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVehicles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        make
        model
        rego
        category
        assetId
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const vehiclesByCompanyIDAndUpdatedAt = /* GraphQL */ `
  query VehiclesByCompanyIDAndUpdatedAt(
    $companyID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vehiclesByCompanyIDAndUpdatedAt(
      companyID: $companyID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        make
        model
        rego
        category
        assetId
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const vehiclesByBaseAndUpdatedAt = /* GraphQL */ `
  query VehiclesByBaseAndUpdatedAt(
    $base: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vehiclesByBaseAndUpdatedAt(
      base: $base
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        make
        model
        rego
        category
        assetId
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCert = /* GraphQL */ `
  query GetCert($id: ID!) {
    getCert(id: $id) {
      id
      companyID
      company {
        id
        name
        users {
          items {
            id
            name
            pushToken
            email
            phone
            roles
            acN
            acnDoc
            createdAt
            updatedAt
            favouriteCerts
            fleets {
              id
              name
              vehicles
              __typename
            }
            status
            driverCerts {
              nextToken
              startedAt
              __typename
            }
            inspectorCerts {
              nextToken
              startedAt
              __typename
            }
            notifications {
              nextToken
              startedAt
              __typename
            }
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        vehicles {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            make
            model
            rego
            category
            assetId
            certs {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        fleets {
          id
          name
          vehicles
          __typename
        }
        createdAt
        updatedAt
        logo
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      vehicleID
      vehicle {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        make
        model
        rego
        category
        assetId
        certs {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      driverID
      driver {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      inspectorID
      inspector {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      type
      odometer
      client
      operatingArea
      checkList
      status
      createdAt
      updatedAt
      base
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listCerts = /* GraphQL */ `
  query ListCerts(
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCerts = /* GraphQL */ `
  query SyncCerts(
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCerts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const certsByCompanyIDAndUpdatedAt = /* GraphQL */ `
  query CertsByCompanyIDAndUpdatedAt(
    $companyID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByCompanyIDAndUpdatedAt(
      companyID: $companyID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const certsByVehicleIDAndUpdatedAt = /* GraphQL */ `
  query CertsByVehicleIDAndUpdatedAt(
    $vehicleID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByVehicleIDAndUpdatedAt(
      vehicleID: $vehicleID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const certsByDriverIDAndUpdatedAt = /* GraphQL */ `
  query CertsByDriverIDAndUpdatedAt(
    $driverID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByDriverIDAndUpdatedAt(
      driverID: $driverID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const certsByInspectorIDAndUpdatedAt = /* GraphQL */ `
  query CertsByInspectorIDAndUpdatedAt(
    $inspectorID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByInspectorIDAndUpdatedAt(
      inspectorID: $inspectorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const certsByBaseAndUpdatedAt = /* GraphQL */ `
  query CertsByBaseAndUpdatedAt(
    $base: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByBaseAndUpdatedAt(
      base: $base
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        vehicleID
        vehicle {
          id
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          make
          model
          rego
          category
          assetId
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        driverID
        driver {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        inspectorID
        inspector {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        type
        odometer
        client
        operatingArea
        checkList
        status
        createdAt
        updatedAt
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      type
      title
      body
      userID
      user {
        id
        name
        pushToken
        email
        phone
        roles
        acN
        acnDoc
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
        status
        driverCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        inspectorCerts {
          items {
            id
            companyID
            company {
              id
              name
              createdAt
              updatedAt
              logo
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            vehicleID
            vehicle {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            driverID
            driver {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            inspectorID
            inspector {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            type
            odometer
            client
            operatingArea
            checkList
            status
            createdAt
            updatedAt
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        notifications {
          items {
            id
            type
            title
            body
            userID
            user {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            base
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        companyID
        company {
          id
          name
          users {
            items {
              id
              name
              pushToken
              email
              phone
              roles
              acN
              acnDoc
              createdAt
              updatedAt
              favouriteCerts
              status
              companyID
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          vehicles {
            items {
              id
              companyID
              make
              model
              rego
              category
              assetId
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          certs {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          fleets {
            id
            name
            vehicles
            __typename
          }
          createdAt
          updatedAt
          logo
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      base
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        body
        userID
        user {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        title
        body
        userID
        user {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const notificationsByUserIDAndUpdatedAt = /* GraphQL */ `
  query NotificationsByUserIDAndUpdatedAt(
    $userID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserIDAndUpdatedAt(
      userID: $userID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        body
        userID
        user {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const notificationsByBaseAndUpdatedAt = /* GraphQL */ `
  query NotificationsByBaseAndUpdatedAt(
    $base: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByBaseAndUpdatedAt(
      base: $base
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        body
        userID
        user {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          acnDoc
          createdAt
          updatedAt
          favouriteCerts
          fleets {
            id
            name
            vehicles
            __typename
          }
          status
          driverCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          inspectorCerts {
            items {
              id
              companyID
              vehicleID
              driverID
              inspectorID
              type
              odometer
              client
              operatingArea
              checkList
              status
              createdAt
              updatedAt
              base
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          notifications {
            items {
              id
              type
              title
              body
              userID
              base
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          companyID
          company {
            id
            name
            users {
              nextToken
              startedAt
              __typename
            }
            vehicles {
              nextToken
              startedAt
              __typename
            }
            certs {
              nextToken
              startedAt
              __typename
            }
            fleets {
              id
              name
              vehicles
              __typename
            }
            createdAt
            updatedAt
            logo
            base
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          base
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        base
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
