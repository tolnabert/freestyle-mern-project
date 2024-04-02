import mongoose, { Schema } from "mongoose";
import { DOG_BREEDS, SIZE, GENDER, SOCIALIZED } from "../utils/constants.js";

const petSchema = new Schema(
  {
    //ownerId: { type: String, required: true }, userId will be connected
    name: { type: String, required: true, trim: true },
    breed: { type: String, enum: Object.values(DOG_BREEDS), required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: Object.values(GENDER), required: true },
    size: { type: String, enum: Object.values(SIZE), required: true },
    weight: { type: Number, required: true },
    socialized: { type: String, enum: Object.values(SOCIALIZED) }, //default: 'Unknown'
    imgSource: { type: String, default: "" },
    attitude: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
