import dotenv from "dotenv";

import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening at Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection FAILED!!", err);
  });
