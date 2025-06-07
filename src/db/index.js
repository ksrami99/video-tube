import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  mongoose
    .connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    .then((connctionInstance) => {
      console.log(`DB Connected! DB Host ${connctionInstance.connection.host}`);
    })
    .catch((error) => {
      console.log("ERROR ", error);
      process.exit(1);
    });
};


export default connectDB;