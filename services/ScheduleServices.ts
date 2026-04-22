import { ApiResponse } from "@/types/ApiResponse";
import { ScheduleType } from "@/types/ScheduleType";

export async function createSchedule(
  payload: ScheduleType,
): Promise<ApiResponse> {
  const response = await fetch("/api/schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong.");
  }

  return data;
}

export async function getBookedTimeSlots(
  date: Date,
): Promise<ApiResponse<string[]>> {
  const formattedData = date.toLocaleDateString("en-CA");

  const response = await fetch(`/api/schedule/timeslots/${formattedData}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong.");
  }

  return data;
}
