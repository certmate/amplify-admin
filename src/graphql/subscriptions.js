/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIndex = /* GraphQL */ `
  subscription OnCreateIndex(
    $filter: ModelSubscriptionIndexFilterInput
    $owner: String
  ) {
    onCreateIndex(filter: $filter, owner: $owner) {
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
export const onUpdateIndex = /* GraphQL */ `
  subscription OnUpdateIndex(
    $filter: ModelSubscriptionIndexFilterInput
    $owner: String
  ) {
    onUpdateIndex(filter: $filter, owner: $owner) {
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
export const onDeleteIndex = /* GraphQL */ `
  subscription OnDeleteIndex(
    $filter: ModelSubscriptionIndexFilterInput
    $owner: String
  ) {
    onDeleteIndex(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onCreateVehicle(filter: $filter, owner: $owner) {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onUpdateVehicle(filter: $filter, owner: $owner) {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle(
    $filter: ModelSubscriptionVehicleFilterInput
    $owner: String
  ) {
    onDeleteVehicle(filter: $filter, owner: $owner) {
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
export const onCreateCert = /* GraphQL */ `
  subscription OnCreateCert(
    $filter: ModelSubscriptionCertFilterInput
    $owner: String
  ) {
    onCreateCert(filter: $filter, owner: $owner) {
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
export const onUpdateCert = /* GraphQL */ `
  subscription OnUpdateCert(
    $filter: ModelSubscriptionCertFilterInput
    $owner: String
  ) {
    onUpdateCert(filter: $filter, owner: $owner) {
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
export const onDeleteCert = /* GraphQL */ `
  subscription OnDeleteCert(
    $filter: ModelSubscriptionCertFilterInput
    $owner: String
  ) {
    onDeleteCert(filter: $filter, owner: $owner) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onCreateNotification(filter: $filter, owner: $owner) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onUpdateNotification(filter: $filter, owner: $owner) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onDeleteNotification(filter: $filter, owner: $owner) {
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
