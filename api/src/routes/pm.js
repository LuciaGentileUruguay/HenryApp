const server = require('express').Router();
const { Usuario, Cohort } = require('../db.js');


//Busca todos los pms
server.get('/', (req, res) => {
    Usuario.findAll({
        where:{
            profile:"pm"
    }})
      .then(pms => res.send(pms))
      .catch(() => res.status(400).json({
        error: true,
        message: 'error al buscar los cohortes'
       })
      )
  })