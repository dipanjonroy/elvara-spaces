export type ScheduleType = {
  fname: string;
  lname?: string;
  email: string;
  phone: string;
  date?: Date;
  time?: string;
  dateTime?: string;
};

export type ScheduleResponseType = {
  fullName:{
    fname: string,
    lname?: string,
  },
  email:string,
  phone:string,
  dateTime:string | Date,
  isFinished:boolean,
  isExpired:boolean,
}
