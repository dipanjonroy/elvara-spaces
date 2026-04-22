import { getBookedTimeSlots } from "@/services/ScheduleServices";
import { ApiResponse } from "@/types/ApiResponse";
import { useQuery } from "@tanstack/react-query";

export function useGetBookedTimeslot(date: Date) {
  const formattedDate = date.toLocaleDateString("en-CA");

  return useQuery<ApiResponse<string[] | []>, Error>({
    queryKey: ["bookedTimeslots", formattedDate],
    queryFn: () => getBookedTimeSlots(date),
    staleTime: 1000 * 60,
  });
}
