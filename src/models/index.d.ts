import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerCertCheckList = {
  readonly title?: string | null;
  readonly status?: string | null;
  readonly comments?: string | null;
  readonly items?: (string | null)[] | null;
}

type LazyCertCheckList = {
  readonly title?: string | null;
  readonly status?: string | null;
  readonly comments?: string | null;
  readonly items?: (string | null)[] | null;
}

export declare type CertCheckList = LazyLoading extends LazyLoadingDisabled ? EagerCertCheckList : LazyCertCheckList

export declare const CertCheckList: (new (init: ModelInit<CertCheckList>) => CertCheckList)

type EagerFleet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly vehicles?: (string | null)[] | null;
}

type LazyFleet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly vehicles?: (string | null)[] | null;
}

export declare type Fleet = LazyLoading extends LazyLoadingDisabled ? EagerFleet : LazyFleet

export declare const Fleet: (new (init: ModelInit<Fleet>) => Fleet)

type EagerIndex = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Index, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bases?: (Base | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIndex = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Index, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bases: AsyncCollection<Base>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Index = LazyLoading extends LazyLoadingDisabled ? EagerIndex : LazyIndex

export declare const Index: (new (init: ModelInit<Index>) => Index) & {
  copyOf(source: Index, mutator: (draft: MutableModel<Index>) => MutableModel<Index> | void): Index;
}

type EagerBase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Base, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly read?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly bID?: string | null;
  readonly users?: (User | null)[] | null;
  readonly companies?: (Company | null)[] | null;
  readonly clients?: (Client | null)[] | null;
  readonly vehicles?: (Vehicle | null)[] | null;
  readonly certs?: (Cert | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly shareds?: (Shared | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyBase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Base, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly read?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly bID?: string | null;
  readonly users: AsyncCollection<User>;
  readonly companies: AsyncCollection<Company>;
  readonly clients: AsyncCollection<Client>;
  readonly vehicles: AsyncCollection<Vehicle>;
  readonly certs: AsyncCollection<Cert>;
  readonly notifications: AsyncCollection<Notification>;
  readonly shareds: AsyncCollection<Shared>;
  readonly updatedAt?: string | null;
}

export declare type Base = LazyLoading extends LazyLoadingDisabled ? EagerBase : LazyBase

export declare const Base: (new (init: ModelInit<Base>) => Base) & {
  copyOf(source: Base, mutator: (draft: MutableModel<Base>) => MutableModel<Base> | void): Base;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pushToken?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly roles?: (string | null)[] | null;
  readonly acN?: string | null;
  readonly acnDoc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favouriteCerts?: (string | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly status?: string | null;
  readonly driverCerts?: (Cert | null)[] | null;
  readonly inspectorCerts?: (Cert | null)[] | null;
  readonly notificationsFrom?: (Notification | null)[] | null;
  readonly notificationsTo?: (Notification | null)[] | null;
  readonly companyID?: string | null;
  readonly company?: Company | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
  readonly write?: (string | null)[] | null;
  readonly owner?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pushToken?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly roles?: (string | null)[] | null;
  readonly acN?: string | null;
  readonly acnDoc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favouriteCerts?: (string | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly status?: string | null;
  readonly driverCerts: AsyncCollection<Cert>;
  readonly inspectorCerts: AsyncCollection<Cert>;
  readonly notificationsFrom: AsyncCollection<Notification>;
  readonly notificationsTo: AsyncCollection<Notification>;
  readonly companyID?: string | null;
  readonly company: AsyncItem<Company | undefined>;
  readonly base: string;
  readonly read?: (string | null)[] | null;
  readonly write?: (string | null)[] | null;
  readonly owner?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly users?: (User | null)[] | null;
  readonly vehicles?: (Vehicle | null)[] | null;
  readonly clients?: (Client | null)[] | null;
  readonly certs?: (Cert | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly logo?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly users: AsyncCollection<User>;
  readonly vehicles: AsyncCollection<Vehicle>;
  readonly clients: AsyncCollection<Client>;
  readonly certs: AsyncCollection<Cert>;
  readonly fleets?: (Fleet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly logo?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerVehicle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vehicle, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company?: Company | null;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly rego?: string | null;
  readonly category?: string | null;
  readonly assetId?: string | null;
  readonly certs?: (Cert | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

type LazyVehicle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vehicle, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company: AsyncItem<Company | undefined>;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly rego?: string | null;
  readonly category?: string | null;
  readonly assetId?: string | null;
  readonly certs: AsyncCollection<Cert>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

export declare type Vehicle = LazyLoading extends LazyLoadingDisabled ? EagerVehicle : LazyVehicle

export declare const Vehicle: (new (init: ModelInit<Vehicle>) => Vehicle) & {
  copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle>) => MutableModel<Vehicle> | void): Vehicle;
}

type EagerCert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cert, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company?: Company | null;
  readonly vehicleID: string;
  readonly vehicle?: Vehicle | null;
  readonly driverID?: string | null;
  readonly driver?: User | null;
  readonly inspectorID?: string | null;
  readonly inspector?: User | null;
  readonly number?: string | null;
  readonly type?: string | null;
  readonly odometer?: string | null;
  readonly client?: string | null;
  readonly operatingArea?: string | null;
  readonly checkList?: (string | null)[] | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

type LazyCert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cert, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company: AsyncItem<Company | undefined>;
  readonly vehicleID: string;
  readonly vehicle: AsyncItem<Vehicle | undefined>;
  readonly driverID?: string | null;
  readonly driver: AsyncItem<User | undefined>;
  readonly inspectorID?: string | null;
  readonly inspector: AsyncItem<User | undefined>;
  readonly number?: string | null;
  readonly type?: string | null;
  readonly odometer?: string | null;
  readonly client?: string | null;
  readonly operatingArea?: string | null;
  readonly checkList?: (string | null)[] | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

export declare type Cert = LazyLoading extends LazyLoadingDisabled ? EagerCert : LazyCert

export declare const Cert: (new (init: ModelInit<Cert>) => Cert) & {
  copyOf(source: Cert, mutator: (draft: MutableModel<Cert>) => MutableModel<Cert> | void): Cert;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
  };
  readonly id: string;
  readonly type?: string | null;
  readonly title?: string | null;
  readonly status?: string | null;
  readonly body?: string | null;
  readonly resourceID?: string | null;
  readonly accessLevel?: string | null;
  readonly fromUserID: string;
  readonly from?: User | null;
  readonly toUserID: string;
  readonly to?: User | null;
  readonly base: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
  };
  readonly id: string;
  readonly type?: string | null;
  readonly title?: string | null;
  readonly status?: string | null;
  readonly body?: string | null;
  readonly resourceID?: string | null;
  readonly accessLevel?: string | null;
  readonly fromUserID: string;
  readonly from: AsyncItem<User | undefined>;
  readonly toUserID: string;
  readonly to: AsyncItem<User | undefined>;
  readonly base: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company?: Company | null;
  readonly name?: string | null;
  readonly logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
  };
  readonly id: string;
  readonly companyID: string;
  readonly company: AsyncItem<Company | undefined>;
  readonly name?: string | null;
  readonly logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly base: string;
  readonly read?: (string | null)[] | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerShared = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Shared, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly model?: string | null;
  readonly modelID: string;
  readonly base: string;
  readonly write?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShared = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Shared, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly model?: string | null;
  readonly modelID: string;
  readonly base: string;
  readonly write?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Shared = LazyLoading extends LazyLoadingDisabled ? EagerShared : LazyShared

export declare const Shared: (new (init: ModelInit<Shared>) => Shared) & {
  copyOf(source: Shared, mutator: (draft: MutableModel<Shared>) => MutableModel<Shared> | void): Shared;
}