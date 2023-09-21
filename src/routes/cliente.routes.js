import { Router } from 'express'
import { deleteCliente, getCliente ,getClienteId,postCliente, putCliente} from '../controller/cliente.controller.js'
import { borrarPublicidad, crearPublicidad, getAllPublicidad } from '../controller/publicidad.Controller.js'


const router=Router()

router.get('/cliente', getCliente)

router.get('/cliente/:id',getClienteId)

router.post('/cliente',postCliente)

router.delete('/cliente/:id', deleteCliente)

router.patch('/cliente/:id', putCliente)


router.get('/publicidad',getAllPublicidad)

router.post('/publicidad',crearPublicidad)

router.delete('/publicidad/:id',borrarPublicidad)

export default router
