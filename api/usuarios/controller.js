const express = require("express");
const controladorUsuarios = express.Router();
const servicioUsuarios = require('./service');

/* datosUsuario
{
    "nombre": xxxxxx,
    "usuario": xxxxx,
    "password" xxxxx,
    "rol":["A","B",..."n"]
} 
*/
controladorUsuarios.get("/iniciarSesion", async function (req,res) {
  let datosUsuario = req.query;
  let resultado = await servicioUsuarios.iniciarSesion(datosUsuario);
  res.send(resultado);
});

controladorUsuarios.post("/crearUsuario", async function (req, res) {
  let datosUsuario = req.body;
  let resultado = await servicioUsuarios.crearUsuario(datosUsuario);
  res.send(resultado);
});

controladorUsuarios.put("/actualzarUsuario/:id", async function (req, res) {
  let id = req.params.id;
  let datos = req.body;
  let resultado = await servicioUsuarios.actualizarUser(id, datos);
  res.send(resultado);
});

controladorUsuarios.delete("/eliminarUsuario/:id", async function (req, res) {
  let id = req.params.id;
  let resultado = await servicioUsuarios.eliminarUsuario(id);
  res.send(resultado);

})


module.exports = controladorUsuarios;
