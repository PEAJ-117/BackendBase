const rootMessage = (req, res) => {
    res.send("Hey!")}
const hiMessage =  (req, res) => {
    res.send("Hola a todos!")}
const byeMessage = (req, res) => {
        res.send("Bueno, adios")}
module.exports = {rootMessage , hiMessage , byeMessage} //Exportar programa