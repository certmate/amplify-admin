// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Index, Base, User, Company, Vehicle, Cert, Notification, CertCheckList, Fleet } = initSchema(schema);

export {
  Index,
  Base,
  User,
  Company,
  Vehicle,
  Cert,
  Notification,
  CertCheckList,
  Fleet
};