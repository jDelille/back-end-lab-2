const e = require('express');
const houses = require('./db.json');
let houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const {id} = req.params;
        let index = houses.findIndex(h => h.id === +id)
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body;
        let newHouse = {
            id: houseId, 
            address,
            price: +price,
            imageURL
        }
        if(!address || !price || !imageURL) {
            res.status(400).send("missing info");
        } else {
            houses.push(newHouse);
            houseId++;
            res.status(200).send(houses);
        }
    },
    updateHouse: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;
        let index = houses.findIndex(h => h.id === +id)
        if (type === 'plus') {
            houses[index].price+=10000;
        } else if (type === 'minus') {
            houses[index].price-=10000;
        } else {
            res.status(400).send('error');
        }
        res.status(200).send(houses);
    }

}
