import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  // One who is subcribing
  subcriber: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // One to whome subcribcriber is subscribing
  channel: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
