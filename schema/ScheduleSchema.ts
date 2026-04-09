import { z } from "zod";

export const ScheduleSchema = z.object({
  fname: z
    .string()
    .min(3, { error: "Firstname should be at least 3 chars." })
    .trim(),

  lname: z.string().trim().optional(),

  email: z.email({ error: "Invalid email address" }),
  phone: z.string().trim().min(11, {error:"Phone number must have 11 digits"}),
  dateTime:z.coerce.date({error:"Invalid date selected"}),
  isFinished: z.boolean().optional(),
  isExpired:z.boolean().optional()
});
