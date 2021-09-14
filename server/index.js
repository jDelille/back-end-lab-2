const express = require('express');
const cors = require('cors');
const port = 4004;

const app = express();
const ctrl = require('./controller.js');

app.use(express.json());
app.use(cors());


app.get('/api/houses', ctrl.getHouses);
app.delete('/api/houses/:id', ctrl.deleteHouse);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:id', ctrl.updateHouse);




app.listen(port, () => console.log(`Server running on ${port}`));
