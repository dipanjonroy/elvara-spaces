import dbConnect from "@/lib/dbConnect";
import ScheduleModel from "@/models/ScheduleModel";
import { ScheduleSchema } from "@/schema/ScheduleSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { fname, lname, email, phone, dateTime } = await request.json();
    const bookingDate = new Date(dateTime);

    /**
     * Validate body data
     */
    const result = ScheduleSchema.safeParse({
      fname,
      lname,
      email,
      phone,
      dateTime,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message,
        },
        { status: 400 },
      );
    }

    console.log(bookingDate, new Date())

    if (bookingDate < new Date()) {
      return NextResponse.json(
        {
          success: false,
          message: "Date can't be smaller that today.",
        },
        {
          status: 400,
        },
      );
    }

    /**
     *  Check times validation
     */
    const hours = bookingDate.getHours();
    const minutes = bookingDate.getMinutes();

    const totalMinutes = hours * 60 + minutes;

    const startTime = 9 * 60;
    const endTime = 17 * 60 + 30;

    if (totalMinutes < startTime || totalMinutes > endTime) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking allowed only between 09:00 AM and 05:30 PM.",
        },
        { status: 400 },
      );
    }

    if (minutes !== 0 && minutes !== 30) {
      return NextResponse.json(
        {
          success: false,
          message: "Only 30-minute slot allowed. (e.g., 9:00, 9:30)",
        },
        { status: 400 },
      );
    }

    await dbConnect(); // Database connection

    /**
     * Check already booked date and time
     */
    const schedule = await ScheduleModel.find({ dateTime: new Date(dateTime) });

    if (schedule.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Date and time is already booked.",
        },
        { status: 409 },
      );
    }

    /**
     *  Create a new schedule
     */

    const dbPayload = {
      fullname: {
        fname,
        lname,
      },
      email,
      phone,
      dateTime,
    };

    const newSchedule = await ScheduleModel.create(dbPayload)
    //

    // Returning Final response
    return NextResponse.json(
      {
        success: true,
        newSchedule,
        message: "New booking created successfully",
      },

      {
        status: 201,
      },
    );
  } catch (error) {
    console.log("Error creating booking", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create new booking",
      },
      {
        status: 500,
      },
    );
  }
}
