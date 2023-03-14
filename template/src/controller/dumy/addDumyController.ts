import { Request, Response } from "express";
import { dumySchema } from "../../db/models";
export const addDumyController = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const { email } = req.body;
		if (!email || typeof email !== "string") {
			return res.status(400).send({ message: "Missing required parameter" });
		}

		// Create a new subscriber with the email address
		const dumy = new dumySchema({ email });
		await dumy.save();

		res.status(201).send({ message: "Dumy added successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Error adding dumy" });
	}
};
