const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    dateTaken: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
