// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Index, User, Company, Vehicle, Cert, Notification, CertCheckList, Fleet } = initSchema(schema);

export {
  Index,
  User,
  Company,
  Vehicle,
  Cert,
  Notification,
  CertCheckList,
  Fleet
};