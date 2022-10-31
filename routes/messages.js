const {Router} = require("express")
const router = Router()
const {rootMessages, hiMessages, byeMessages, postMessages, putMessages, deleteMessages} = require ('../controllers/messages') //Ruta
    router.get('/', rootMessages)
    router.get('/hi', hiMessages)
    router.get('/bye', byeMessages)
    router.post('/', postMessages)
    router.put('/', putMessages)
    router.delete('/', deleteMessages) //End-Point
module.exports = router //Exportar programa