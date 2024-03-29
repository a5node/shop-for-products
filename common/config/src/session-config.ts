import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import session from 'express-session';

import { ISessionOption } from '@common/interface';
import { REDIS_AUTH_TOKEN_SESSION } from '@common/libs';

export const sessionConfig = (redisClient: Redis, sessionEnv: ISessionOption) => {
  const RedisStore = connectRedis(session);
  return {
    store: new RedisStore({
      client: redisClient as any,
    }),
    name: REDIS_AUTH_TOKEN_SESSION,
    secret: sessionEnv.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 60 days --> need >= max of alive time of refresh token
    },
  };
};
