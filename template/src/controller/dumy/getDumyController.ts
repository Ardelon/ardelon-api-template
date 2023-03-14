import { Request, Response } from "express";
import { dumySchema } from "../../db/models";
export const getDumyController = async (req: Request, res: Response) => {
	try {
		const dumyList = await dumySchema.find();
		res.json(dumyList);
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Error getting dumies" });
	}
};
