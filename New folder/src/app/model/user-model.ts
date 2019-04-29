export class User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  password: string;
}
export class Message {
  sender: string;
  receiver: string;
  msg: string;
  TimeNdate: Date;
  _id?: number;
}
