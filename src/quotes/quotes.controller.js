const Quote = require("./quotes.model")

async function list(req, res) {
    const quotes = await Quote.find();
    res.send(quotes);
}

async function read(req, res) {
    const { quoteId } = req.params;
    const quote = await Quote.findById(quoteId);
    res.json({ quote });
}

module.exports = {
    list,
    read,
};