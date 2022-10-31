const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hola, Mundo!')
})
app.listen(process.env.PORT, () => {
    console.log("Backend activado en el puerto: ", process.env.PORT)
})