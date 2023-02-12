import { NatsRecord, NatsRecordBuilder } from '@nestjs/microservices';

import { ObjectId } from 'mongoose';

import { IBaseData, IPrivateData, IUser, ENUM } from '@common/interface';

/*** Command for creating a `user` and based on this, the connection of servers is built. */
export namespace CreateCommand {
  /*** The connection to the service `one to one`.*/
  export const Pattern: {
    readonly cmd: string;
  } = {
    cmd: `${ENUM.NatsServicesQueue.USER}.create`,
  };

  /*** Must have these values to create a user.*/
  export class Request implements IUser {
    email: string;
    password: string;
    name: string;
    privateData?: IPrivateData;
    roles?: ENUM.Roles[];
  }

  /*** These values must be returned from the service after the user has been created.*/
  export class Response implements IBaseData {
    id: ObjectId;
    created: Date;
    updated: Date;
  }

  /*** Configuration, nats header*/
  export class Header {}

  /*** Build a request to submit it to the service for processing.*/
  export const build = (data: Request): NatsRecord<Request, Header> => {
    return new NatsRecordBuilder<Request>(data).build();
  };

  /*** The data types to be sent to the service.*/
  export type UserRecord = NatsRecord<Request, Header>;
}
