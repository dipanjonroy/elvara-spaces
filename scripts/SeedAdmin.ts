import dbConnect from "@/lib/dbConnect";
import AdminModel, { Admin } from "@/models/AdminModel";
import { AdminSchema } from "@/schema/AdminSchema";
import "dotenv/config";
import bcrypt from "bcryptjs";

const adminDetails = {
  username: "dipanjon",
  email: "dipanjon@gmail.com",
  password: "DipAnjon11!!",
  role: "admin",
};

const SeedAdmin = async () => {
  const result = AdminSchema.safeParse(adminDetails);
  if (!result.success) {
    console.log(result.error.issues[0].message);
    return;
  }

  try {
    await dbConnect();

    const alreadyAdmin: Admin | null = await AdminModel.findOne({
      $or: [{ username: adminDetails.username }, { email: adminDetails.email }],
    });

    if (alreadyAdmin) {
      if (alreadyAdmin.username === adminDetails.username) {
        console.log("Username already exists.");
        return;
      }

      if (alreadyAdmin.email === adminDetails.email) {
        console.log("Email is already taken.");
      }
    }

    const hashedPassword = await bcrypt.hash(adminDetails.password, 10);

    await AdminModel.create({...adminDetails,password:hashedPassword});

    console.log("New admin seeding completed.");
  } catch (error) {
    console.log(error);
  }
};

SeedAdmin();
