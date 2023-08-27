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
  readonly users?: (User | null)[] | null;
  readonly companies?: (Company | null)[] | null;
  readonly vehicles?: (Vehicle | null)[] | null;
  readonly certs?: (Cert | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIndex = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Index, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly users: AsyncCollection<User>;
  readonly companies: AsyncCollection<Company>;
  readonly vehicles: AsyncCollection<Vehicle>;
  readonly certs: AsyncCollection<Cert>;
  readonly notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Index = LazyLoading extends LazyLoadingDisabled ? EagerIndex : LazyIndex

export declare const Index: (new (init: ModelInit<Index>) => Index) & {
  copyOf(source: Index, mutator: (draft: MutableModel<Index>) => MutableModel<Index> | void): Index;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favouriteCerts?: (string | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly driverCerts?: (Cert | null)[] | null;
  readonly inspectorCerts?: (Cert | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly companyID: string;
  readonly company?: Company | null;
  readonly bID?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favouriteCerts?: (string | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly driverCerts: AsyncCollection<Cert>;
  readonly inspectorCerts: AsyncCollection<Cert>;
  readonly notifications: AsyncCollection<Notification>;
  readonly companyID: string;
  readonly company: AsyncItem<Company | undefined>;
  readonly bID?: string | null;
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
  readonly certs?: (Cert | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly logo?: string | null;
  readonly bID?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly users: AsyncCollection<User>;
  readonly vehicles: AsyncCollection<Vehicle>;
  readonly certs: AsyncCollection<Cert>;
  readonly fleets?: (Fleet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly logo?: string | null;
  readonly bID?: string | null;
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
  readonly bID?: string | null;
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
  readonly bID?: string | null;
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
  readonly driverID: string;
  readonly driver?: User | null;
  readonly inspectorID: string;
  readonly inspector?: User | null;
  readonly type?: string | null;
  readonly odometer?: string | null;
  readonly client?: string | null;
  readonly operatingArea?: string | null;
  readonly checkList?: (string | null)[] | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bID?: string | null;
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
  readonly driverID: string;
  readonly driver: AsyncItem<User | undefined>;
  readonly inspectorID: string;
  readonly inspector: AsyncItem<User | undefined>;
  readonly type?: string | null;
  readonly odometer?: string | null;
  readonly client?: string | null;
  readonly operatingArea?: string | null;
  readonly checkList?: (string | null)[] | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bID?: string | null;
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
  readonly body?: string | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly bID?: string | null;
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
  readonly body?: string | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly bID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}