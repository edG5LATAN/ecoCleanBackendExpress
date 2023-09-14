import { Router } from 'express'
import { deleteCliente, getCliente ,getClienteId,postCliente, putCliente} from '../controller/cliente.controller.js'


const router=Router()

router.get('/cliente', getCliente)

router.get('/cliente/:id',getClienteId)

router.post('/cliente',postCliente)

router.delete('/cliente/:id', deleteCliente)

router.patch('/cliente/:id', putCliente)

export default router
