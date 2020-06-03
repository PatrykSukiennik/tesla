const mongoose = require("mongoose");
const validator = require("validator");


const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    hex: {
        type: String,
        required: true,
        unique: true,
    }
});


const Color = mongoose.model("Color", colorSchema);
module.exports = Color;
