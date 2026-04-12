import dbConnect from "@/lib/dbConnect";
import ScheduleModel from "@/models/ScheduleModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> },
) {
  try {
    const { date } = await params;

    const inputDate = new Date(date);

    const start = new Date(inputDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(inputDate);
    end.setHours(23, 59, 59, 999);

    // DB connection
    await dbConnect();

    // Get matched schedules
    const schedules = await ScheduleModel.find({
      dateTime: {
        $gt: start,
        $lt: end,
      },
    });

    // Get Timesslots
    const times: string[] = schedules.map((schedule: { dateTime: Date }) => {
      const date = new Date(schedule.dateTime);

      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    });

    // Send response
    return NextResponse.json({
      success: true,
      data: times,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
