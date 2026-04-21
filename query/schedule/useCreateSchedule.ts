import { createSchedule } from "@/services/ScheduleServices";
import { ApiResponse } from "@/types/ApiResponse";
import { ScheduleResponseType, ScheduleType } from "@/types/ScheduleType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateSchedule (){
  const queryClient = useQueryClient();

  const mutation = useMutation<ApiResponse<ScheduleResponseType>,Error,ScheduleType>({
    mutationFn: createSchedule,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["bookedTimeslots"]})
    },
    onError:(error:Error)=>{
      console.error(error.message)
    }
  });

  return mutation;
}