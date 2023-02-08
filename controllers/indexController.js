const fs = require("fs");
const path = require("path");

const menu = require("../database");



module.exports = {
    index: function(req, res, next) {
      res.render('index', {
        title: "Comision 19",
        menu, /* aca asignamos la variable title que dejamos en title del head */
      });
    },

    detail: function(req, res, next) {
      const platoId = req.params.id;
      const platos = menu.find(plato => plato.id == platoId)
      
      res.render("detalleMenu", {
        title: "Detalle del plato",
        platos,
      })
    }

    }
