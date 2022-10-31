const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID}= require("../controllers/usuarios")
const router =  Router()
/*  
    En Insomnia poner:
    http://localhost:4000/api/v1/usuarios
*/
router.get("/", getUsers)
router.get("/id/:id", getUserByID)
router.delete("/" , deleteUserByID)
module.exports = router