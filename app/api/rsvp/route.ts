import { format } from "date-fns";
import { type NextRequest, NextResponse } from "next/server";
import getGoogleSheetsClient from "@/lib/googleAuth";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (Object.hasOwn(body, "honeypot")) {
    return NextResponse.json(
      { message: "What are you doing?" },
      { status: 500 },
    );
  }

  if (Object.hasOwn(body, "names") && !body.names) {
    return NextResponse.json(
      {
        message: "Missing required fields",
      },
      { status: 400 },
    );
  }

  body.timestamp = format(body.timestamp, "M/d/yyyy H:mm:ss");
  body.comments = body.comments ? body.comments : "-";

  const service = await getGoogleSheetsClient();

  try {
    const response = await service.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Form Responses 1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [Object.values(body)],
      },
    });

    return NextResponse.json(
      {
        message: "Successfully submitted the form!",
        data: response.data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
