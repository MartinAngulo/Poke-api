const { Router } = require('express');
const { Pokemon, Types } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async(req, res)=>{
    
    res.status(201).json(await Pokemon.findAll({
        include: Types
    }));
})


module.exports = router;
