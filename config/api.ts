import axios from "axios";
import { z } from "zod";

export const RSVPFormSchema = z.object({
  isAttending: z.boolean(),
  names: z.string().min(1, "Required Field").trim(),
  comments: z
    .string()
    .max(100, "Comments/Questions must be at most 100 characters.")
    .nullable(),
});

export type TRSVPForm = z.infer<typeof RSVPFormSchema>;
