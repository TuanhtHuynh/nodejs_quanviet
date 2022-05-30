
const helper = require("./server/helpers/helper");

const { debug } = require("console");

const connectDB = require("./server/database/connection");


const PORT = process.env.PORT || 3000;

const createServer = require("./createServer");
let app = createServer();

app.locals.helper = helper;
app.listen(process.env.PORT, async () => {
  debug && console.log(`app running on http://localhost:${PORT}`);
  await connectDB.connect();
});
