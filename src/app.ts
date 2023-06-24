import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
//using cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

export default app;
