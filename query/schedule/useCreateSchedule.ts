import { createSchedule } from "@/services/ScheduleServices";
import { ApiResponse } from "@/types/ApiResponse";
import { ScheduleType } from "@/types/ScheduleType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateSchedule() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ApiResponse, Error, ScheduleType>({
    mutationFn: createSchedule,
    onSuccess: (apiData: ApiResponse, payload: ScheduleType) => {
      const newDateTime = new Date(payload.dateTime!);
      const formattedDate = newDateTime.toLocaleDateString("en-CA");
      const newTime = new Date(payload.dateTime!).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      queryClient.setQueryData(
        ["bookedTimeslots", formattedDate],
        (oldData: ApiResponse<string[]>) => {
          const updatedBookedTimes = {
            ...oldData,
            data: [...oldData.data!, newTime],
          };

          return updatedBookedTimes;
        },
      );
    },
    onError: (error: Error) => {
      console.error(error.message);
    },
  });

  return mutation;
}
