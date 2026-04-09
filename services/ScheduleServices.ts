import { ApiResponse } from "@/types/ApiResponse";
import { ScheduleResponseType, ScheduleType } from "@/types/ScheduleType";

export async function createSchedule (payload:ScheduleType):Promise<ApiResponse<ScheduleResponseType>>{
  const response = await fetch("/api/schedule",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data?.message || "Something went wrong.")
  }

  return data;
}