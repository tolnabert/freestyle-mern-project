import mongoose, { Schema } from "mongoose";
import { DOG_BREEDS, SIZE, GENDER, SOCIALIZED } from "../utils/constants.js";

const dogSchema = new Schema(
  {
    //ownerId: { type: String, required: true }, userId will be connected
    name: { type: String, required: true, trim: true },
    breed: { type: String, enum: DOG_BREEDS.map(breed => breed.value), required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: GENDER.map(gender => gender.value), required: true },
    size: { type: String, enum: SIZE.map(size => size.value), required: true },
    weight: { type: Number, required: true },
    socialized: { type: String, enum: SOCIALIZED.map(socialized => socialized.value) }, //default: 'Unknown'
    imgSource: { type: String, default: "" },
    attitude: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

const Dog = mongoose.model("Dog", dogSchema);

export default Dog;
