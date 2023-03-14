import { Request, Response } from "express";
import { dumySchema } from "../../db/models";
export const deleteDumyController = async (req: Request, res: Response) => {
	try {
		const { email } = req.body;
		if (!email || typeof email !== "string") {
			return res.status(400).send({ message: "Missing required parameter" });
		}
		const dumy = await dumySchema.findOneAndDelete({ email });
		if (!dumy) {
			return res.status(404).send({ message: "Dumy not found" });
		}
		res.json(dumy);
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Error deleting dumy" });
	}
};
