import mongoose from "mongoose";
import app from "./app";
const port: number = 8000;

//database connection

async function bootstarp() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");

    console.log("database connection successful");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log("fail to connect ", err);
  }
}
bootstarp();
