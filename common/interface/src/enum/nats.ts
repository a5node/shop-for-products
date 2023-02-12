/*** The names of the `NATS` service in system `to connect to them`. */
export enum NatsServicesName {
  API = 'API_SERVICE',
  USER = 'USER_SERVICE',
  PRODUCT = 'PRODUCT_SERVICE',
  ORDER = 'ORDER_SERVICE',
  EMAIL = 'EMAIL_SERVICE',
}

/*** The names of the `NATS` services in the system `to catching events`.*/
export enum NatsServicesQueue {
  API = 'api',
  USER = 'user',
  PRODUCT = 'product',
  ORDER = 'order',
  EMAIL = 'email',
}
