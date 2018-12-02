const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmberSchema = new Schema({
	content: {
		type: String, required: true
	}
});

module.exports = mongoose.model("Ember", EmberSchema);
