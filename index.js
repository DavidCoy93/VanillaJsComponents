const express = require('express');
const app = express();
const path = require('path');

app.listen(3600, () => {
    console.log('El servidor esta corriendo en el puerto 3600')
})

app.use('/scripts/', express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            res.status(400).send('Ocurrio un error ' + err.message);
        }
    })
})