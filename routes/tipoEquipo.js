const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID, deleteTipoEquipo} = require('../controllers/tipoEquipo')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// consultar todos
router.get('/', getTipoEquipos)

 // actualizar

 router.put('/',updateTipoEquipoByID)
 // elimanar 
 

 router.delete('/', deleteTipoEquipo)

module.exports = router;