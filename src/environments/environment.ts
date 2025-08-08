export const environment = {
  production: false,
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
