export const environment = {
  production: false,
  appPrefix: 'core_rsa',
  apiServer: {
    ssl: false,
    host: 'localhost:8088',
    prefix: 'api',
    paths: {
      auth: {
        login: 'login',
      }
    }
  }
};
