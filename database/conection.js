/* conexion singleton a la base de datos, es decir, una sola instancia a
  Mongodb que inyectara la info a traves de la api */

  const mongoClient = require("mongodb").MongoClient;
  require("dotenv").config();
  
  let conexion;
  
  const conectar = function () {
    return new Promise(function (resolve, reject) {
      if (conexion) {
        resolve();
      } else {
        mongoClient.connect(process.env.MONGODB_URI1, { useNewUrlParser: true })
        .then(function (client) {
          conexion = client.db(process.env.MONGODB_DB);
          console.log("base de datos conectada exitosamente");
          resolve();
        })
        .catch(function (error) {
          reject(error);
        } )
      }
    });
  }
  
  const obtenerConexion = function () {
      return conexion;
  }
  
  module.exports = {conectar,obtenerConexion};