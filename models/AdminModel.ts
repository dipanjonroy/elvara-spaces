import mongoose, {Schema, model, Document} from "mongoose";

export interface Admin extends Document {
  username:string;
  email:string;
  password:string;
  role:"admin"
};

const adminSchema = new Schema<Admin>({
  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    required:true,
  },
},{timestamps:true});

const AdminModel = mongoose.models.Admin as mongoose.Model<Admin> || model<Admin>("Admin", adminSchema);

export default AdminModel;