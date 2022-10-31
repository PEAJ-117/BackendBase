const { request, response } = require("express");
const rootMessages = (req=request, res=response) => {
    res.status(404).json ({msg:'No se encontro'});
}
const hiMessages =  (req=request, res=response) => {
    res.status(405).json ({msg:'Sin metodo para procesar'});
}
const byeMessages = (req=request, res=response) => {
    res.status(406).json ({msg:'No se encontro'});
}
const postMessages = (req=request, res=response) => {
    res.status(407).json ({msg:'Proxy rechazo la solicitud'});
}
const putMessages = (req=request, res=response) => {
    res.status(408).json ({msg:'Desconectado por inactividad'});
}
const deleteMessages = (req=request, res=response) => {
    res.status(409).json ({msg:'No hay sistema'});
}
module.exports = {rootMessages, hiMessages, byeMessages, postMessages, putMessages, deleteMessages};