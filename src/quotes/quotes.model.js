const mongoose = require("mongoose");

const schema = mongoose.Schema({
    quote: String,
    author: String,
})

module.exports = mongoose.model("Quote", schema);