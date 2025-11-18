"use server";

import { google, type sheets_v4 } from "googleapis";

const getGoogleSheetsClient = async (): Promise<sheets_v4.Sheets> => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  const service = google.sheets({ auth, version: "v4" });
  return service;
};

export default getGoogleSheetsClient;
