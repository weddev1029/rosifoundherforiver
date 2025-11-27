import axios from "axios";
import { z } from "zod";

export const RSVPFormSchema = z.object({
  timestamp: z.number(),
  attendance: z.string().min(1, "Required Field"),
  names: z.string().min(1, "Required Field").trim(),
  comments: z
    .string()
    .max(100, "Comments/Questions must be at most 100 characters.")
    .nullable(),
});

export type TRSVPForm = z.infer<typeof RSVPFormSchema>;

export const sendRSVPForm = async (data: TRSVPForm) => {
  const response = await axios.post("/api/rsvp", data);

  return response;
};
