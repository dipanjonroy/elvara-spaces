import mongoose, { Schema, model, Document } from "mongoose";

type Fullname = {
  fname: string;
  lname?: string;
};

export interface Schedule extends Document {
  fullname: Fullname;
  email: string;
  phone: string;
  dateTime: Date;
  isFinished?: boolean;
  isExpired?: boolean;
}

const ScheduleSchema: Schema<Schedule> = new Schema(
  {
    fullname: {
      fname: {
        type: String,
        required: true,
      },
      lname: {
        type: String,
      },
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    dateTime: {
      type: Date,
      required: true,
      index:true,
    },

    isFinished: {
      type: Boolean,
      default: false,
      required: true,
    },

    isExpired: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true },
);


const ScheduleModel = mongoose.models.Schedule as mongoose.Model<Schedule> || model<Schedule>("Schedule", ScheduleSchema);

export default ScheduleModel;