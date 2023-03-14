import express from "express";
const bodyParser = require("body-parser");
import { connectToDB } from "./db/connectToDB";
import { router as dumyRouter } from "./routes/dumyRouter";
import { logger } from "./middleware/logger";

connectToDB();

const app = express();

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger);

app.use("/dumy", dumyRouter);

// Start the server
const port = 35789;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
