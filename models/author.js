const { DateTime } = require("luxon");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  familyName: { type: String, required: true, maxLength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.firstName && this.familyName) {
    fullname = `${this.familyName}, ${this.firstName}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("dateOfBirthFormatted").get(function () {
  return this.dateOfBirth ? DateTime.fromJSDate(this.dateOfBirth).toLocaleString(DateTime.DATE_MED) : '';
});

AuthorSchema.virtual("dateOfDeathFormatted").get(function () {
  return this.dateOfDeath ? DateTime.fromJSDate(this.dateOfDeath).toLocaleString(DateTime.DATE_MED) : '';
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
