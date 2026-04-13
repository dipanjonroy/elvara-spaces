import { getBookedTimeSlots } from "@/services/ScheduleServices";
import { ApiResponse } from "@/types/ApiResponse";
import { useQuery } from "@tanstack/react-query";

export function useGetBookedTimeslot (date:Date){
  return useQuery<ApiResponse<string[]>, Error>({
    queryKey:["bookedTimeslots", date],
    queryFn:()=>getBookedTimeSlots(date),
    enabled:!!date,
    staleTime:0
  })
}