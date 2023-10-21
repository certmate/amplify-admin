// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Index, Base, User, Company, Vehicle, Cert, Notification, Client, Shared, CertCheckList, Fleet, AuditSection } = initSchema(schema);

export {
  Index,
  Base,
  User,
  Company,
  Vehicle,
  Cert,
  Notification,
  Client,
  Shared,
  CertCheckList,
  Fleet,
  AuditSection
};