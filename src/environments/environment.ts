export const environment = {
  production: false,
  appPrefix: 'core_rsa',
  apiServer: {
    mysql: {
      ssl: false,
      host: 'localhost:8088',
      prefix: 'api',
      paths: {
        auth: {
          login: 'login',
          switch: 'switch'
        },
        admin: {
          role: 'roles/index'
        }
      }
    },
    mongoDb: {
      ssl: false,
      host: 'localhost:5293',
      prefix: 'api',
      paths: {
        driver: {
          list: 'api/drivers',
          detail: 'api/drivers/{DRIVER_ID}'
        }
      }
    }
  }
};
