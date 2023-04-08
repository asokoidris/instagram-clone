
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	ResetToken: { type: String },
	ExpirationToken: { type: Date },
	Photo: {
		type: Buffer,
	},
	PhotoType: {
		type: String,
	},
	Followers: [{ type: ObjectId, ref: "User" }],
	Following: [{ type: ObjectId, ref: "User" }],
	Bookmarks: [{ type: ObjectId, ref: "Post" }],
});

// Create a model from our schema
module.exports = mongoose.model("User", userSchema);
