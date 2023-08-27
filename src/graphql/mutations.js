/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIndex = /* GraphQL */ `
  mutation CreateIndex(
    $input: CreateIndexInput!
    $condition: ModelIndexConditionInput
  ) {
    createIndex(input: $input, condition: $condition) {
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
export const updateIndex = /* GraphQL */ `
  mutation UpdateIndex(
    $input: UpdateIndexInput!
    $condition: ModelIndexConditionInput
  ) {
    updateIndex(input: $input, condition: $condition) {
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
export const deleteIndex = /* GraphQL */ `
  mutation DeleteIndex(
    $input: DeleteIndexInput!
    $condition: ModelIndexConditionInput
  ) {
    deleteIndex(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
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
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
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
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
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
export const createCert = /* GraphQL */ `
  mutation CreateCert(
    $input: CreateCertInput!
    $condition: ModelCertConditionInput
  ) {
    createCert(input: $input, condition: $condition) {
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
export const updateCert = /* GraphQL */ `
  mutation UpdateCert(
    $input: UpdateCertInput!
    $condition: ModelCertConditionInput
  ) {
    updateCert(input: $input, condition: $condition) {
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
export const deleteCert = /* GraphQL */ `
  mutation DeleteCert(
    $input: DeleteCertInput!
    $condition: ModelCertConditionInput
  ) {
    deleteCert(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
