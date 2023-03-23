const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos, putTipoEquipos, deleteTipoEquipo} = require('../controllers/tipoEquipo')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// consultar todos
router.get('/', getTipoEquipos)

 // actualizar

 router.put('/',putTipoEquipos)
 // elimanar 

 router.delete('/', deleteTipoEquipo)

module.exports = router;