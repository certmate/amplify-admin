/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIndex = /* GraphQL */ `
  query GetIndex($id: ID!) {
    getIndex(id: $id) {
      id
      users {
        items {
          id
          name
          pushToken
          email
          phone
          roles
          acN
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          bID
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
          bID
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
          bID
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
          bID
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
      createdAt
      updatedAt
      favouriteCerts
      fleets {
        id
        name
        vehicles
        __typename
      }
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
          bID
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
          bID
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
          bID
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
        bID
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
export const usersByBIDAndName = /* GraphQL */ `
  query UsersByBIDAndName(
    $bID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByBIDAndName(
      bID: $bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          bID
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
          bID
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
      bID
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
        bID
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
        bID
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
export const companiesByBIDAndName = /* GraphQL */ `
  query CompaniesByBIDAndName(
    $bID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companiesByBIDAndName(
      bID: $bID
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
        bID
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
        bID
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
          bID
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
      bID
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
          createdAt
          updatedAt
          logo
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
        bID
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
export const vehiclesByBIDAndUpdatedAt = /* GraphQL */ `
  query VehiclesByBIDAndUpdatedAt(
    $bID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vehiclesByBIDAndUpdatedAt(
      bID: $bID
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
          createdAt
          updatedAt
          logo
          bID
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
        bID
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
        bID
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
          bID
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
        bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
      bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
export const certsByBIDAndUpdatedAt = /* GraphQL */ `
  query CertsByBIDAndUpdatedAt(
    $bID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certsByBIDAndUpdatedAt(
      bID: $bID
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
          createdAt
          updatedAt
          logo
          bID
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
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
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
        bID
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
        createdAt
        updatedAt
        favouriteCerts
        fleets {
          id
          name
          vehicles
          __typename
        }
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
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
export const notificationsByBIDAndUpdatedAt = /* GraphQL */ `
  query NotificationsByBIDAndUpdatedAt(
    $bID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByBIDAndUpdatedAt(
      bID: $bID
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
          createdAt
          updatedAt
          favouriteCerts
          companyID
          bID
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        bID
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
