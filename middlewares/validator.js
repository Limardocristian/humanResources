const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  register: [
    // Email
    body("email")
      .notEmpty()
      .withMessage("El campo email es obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value) => {
        return User.findOne({ where: { email: value } }).then(
          user => {
            return user ? Promise.reject("Email ya utilizado") : Promise.resolve();
          }
        )
      })
      .withMessage("Email ya utilizado"),
       // Password
    body("password")
      .notEmpty()
      .withMessage("El campo contraseña es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener al menos 3 carácteres"),
    // Retype password
    body("retype")
      .notEmpty()
      .withMessage("El campo reescribir contraseña es obligatorio")
      .bail()
      .custom((value, { req }) => req.body.password === value)
      .withMessage("Las contraseñas no coinciden"),
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("El campo  email es obligatorio")
      .bail()
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } }).then(
          user => {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                return Promise.resolve();
              }
            }
            return Promise.reject("Email o contraseña invalidos");
          }
        )
      })
      .withMessage("Email o contraseña inválidos"),
    body("password").notEmpty().withMessage("Campo obligatorio")
  ],
  addToCart: [
    body("quantity")
      .custom((value) => value > 0)
      .withMessage("Debe agregar al menos 1 producto al carrito"),
  ],
 
};