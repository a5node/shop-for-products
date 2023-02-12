import { IBaseData } from '@common/interface';
import {
  Field,
  ObjectType,
} from '@nestjs/graphql';
import { Schema, ObjectId } from 'mongoose';

@ObjectType()
export class BaseModel implements IBaseData {
  @Field(() => Schema.Types.ObjectId, { nullable: true })
  public readonly id: ObjectId;

  @Field(() => Date, { nullable: true })
  public readonly created: Date;

  @Field(() => Date, { nullable: true })
  public readonly updated: Date;
}
