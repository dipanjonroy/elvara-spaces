import { z } from "zod";

export const AdminSchema = z.object({
  username: z
    .string()
    .min(1, "Username is requried.")
    .min(3, { error: "Username must be at least 3 characters." })
    .trim(),
  email: z
    .email({ error: "Invalid email address." })
    .min(1, { error: "Email is required." }),
  password: z
    .string()
    .min(1, { error: "Password is required." })
    .min(6, { error: "Password must be at least 6 characters." })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, {
      error:
        "Password must contain at least one letter, one number, and one special character",
    })
    .trim(),
  role: z.string().min(1, "Role is required."),
});

export const AdminLoginSchema = z.object({
  user: z.string().min(1, { error: "Username or email is required." }),
  password: z.string().min(1, { error: "Password is required." }),
});
