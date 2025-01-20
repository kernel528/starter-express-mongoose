const { PORT = 5555 } = process.env;
const app = require("./app");

const listener = () => console.log(`API server listening on Port http://localhost:${PORT}!`);
app.listen(PORT, listener);
