import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { Schema, model } from "mongoose";
//using cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb

  /*
step1: interface
step2: schema
step3: model
step4: database query

*/

  // res.send("Hello World!");
  // next();

  // Creating an interface

  interface IUser {
    id: number;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contractNo: string;
    emergencyContractNo: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // creating schema using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contractNo: {
      type: String,
      required: true,
    },

    emergencyContractNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });
  const User = model<IUser>("User", userSchema);
  const createUserToDB = async () => {
    const user = new User({
      id: "235923453438",
      role: "student",
      password: "sdkafjtrelk",
      name: {
        firstName: "alamsdfdsgfain",
        middleName: "nai",
        lastName: "khadfsgn",
      },
      dateOfBirth: "30-10-1996",
      gender: "male",
      email: "myemail@email.com",
      contractNo: "2389238",
      emergencyContractNo: "999",
      presentAddress: "bari nai",
      permanentAddress: "goridsfgb",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB();
});

export default app;
