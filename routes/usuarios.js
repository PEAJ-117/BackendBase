const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID, addUser} = require("../controllers/usuarios")
const router =  Router()
/*  
    En Insomnia poner:
    http://localhost:4000/api/v1/usuarios
*/
router.get("/", getUsers) //GET
router.get("/id/:id", getUserByID) //GET
router.delete("/" , deleteUserByID) //DELETE
router.post("/", addUser) //POST
module.exports = router