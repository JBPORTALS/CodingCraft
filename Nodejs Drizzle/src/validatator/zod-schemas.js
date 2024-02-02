import * as z from "zod";

export const UserPostSchema = z.object({
  name: z.string().min(1, "Name must be required"),
  email: z.string().email("Invalid email"),
});
