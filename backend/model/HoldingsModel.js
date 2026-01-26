const {model} = require('mongoose');

const {HoldingsShchema} = require('../schemas/HoldingSchema');

const HoldingsModel = new model("holding", HoldingsShchema);

module.exports = {HoldingsModel};