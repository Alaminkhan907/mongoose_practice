export interface IUser {
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
