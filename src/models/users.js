const { Schema, model } = require("mongoose");
const newSchema = new Schema({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	nickName: { type: String, required: true },
	dateBirth: { type: String, required: true },
	email: {type: String, required: true},
	phone: { type: String, required: true },
	city: { type: String, required: true },
	urlFacebook: { type: String},
	urlInstagram: { type: String },
	urlWhatapp: { type: String },
	urlTiktok: { type: String },
	urlTwitter: { type: String },
	description: { type: String },
}, {
}, {
	timestamps: true
});
module.exports = model("PreUser", newSchema);