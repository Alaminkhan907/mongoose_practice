import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "23592338",
    role: "student",
    password: "sdkadfgsfjtrelk",
    name: {
      firstName: "alamsdfdssafagfain",
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
  return user;
};
