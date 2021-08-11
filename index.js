const { response } = require('express')
const express = require('express')
const path = require('path')
const app = express()

app.listen(3000 , () => {
    console.log('Aplicación corriendo en el puerto 3000')
})

app.get('/', (request,response) => {

    console.log(__dirname)
    response.sendFile(path.resolve(__dirname, 'index.html'))
    
})