import { Schema, model, Document } from "mongoose";

interface IDumy extends Document {
	email: string;
	isDumy: boolean;
}

const dumySchema: Schema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate: {
			validator: function (v: string) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
			},
			message: "Invalid email address",
		},
	},
	isDumy: {
		type: Boolean,
		default: true,
	},
});

export default model<IDumy>("Dumy", dumySchema);
