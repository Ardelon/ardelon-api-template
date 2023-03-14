import mongoose from "mongoose";

// Connect to MongoDB
export const connectToDB = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/dumy")
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.error(err));
};
