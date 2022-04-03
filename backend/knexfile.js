module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host : 'dbgui-s22farmersmarket.cqqosprzhbga.us-east-2.rds.amazonaws.com',
      port : 3306,
      user : 'admin',
      password : 'wowPassword',
      insecureAuth: true,
      database : 'db'
    }
  }
};