"use client";

import { IoMdClose } from "react-icons/io";
import InputField from "../ui/InputField";
import DatePicker from "../ui/DatePicker";
import SelectDropdown from "../ui/SelectDropdown";
import { generateTimeSlot } from "@/helper/generateTimeSlot";
import PrimaryButton from "../ui/PrimaryButton";
import { SlClock } from "react-icons/sl";
import { useRef, useState } from "react";
import { useModalStore } from "@/store/ModalStore";
import useClickOutside from "@/hooks/useClickOutside";
import { isEmail, isEmpty, isDate } from "@/helper/ValidateForm";
import { toast } from "../toast/Toast";
import { ScheduleResponseType, ScheduleType } from "@/types/ScheduleType";
import { useCreateSchedule } from "@/query/schedule/useCreateSchedule";
import { mergeDateAndTime } from "@/helper/mergeDateAndTime";
import { ApiResponse } from "@/types/ApiResponse";

export default function BookingModal() {
  const { mutate, isPending } = useCreateSchedule();
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModalStore();
  const [formData, setFormData] = useState<ScheduleType>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    date: new Date(),
    time: "",
  });

  useClickOutside(modalRef, closeModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form Data validation
    if (isEmpty(formData.fname)) {
      toast.error("Please enter your firstname");
      return;
    }

    if (isEmpty(formData.email)) {
      toast.error("Please enter your email.");
      return;
    } else if (!isEmail(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (isEmpty(formData.phone)) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!isDate(formData.date)) {
      toast.error("Please select a date.");
      return;
    }

    if (isEmpty(formData.time)) {
      toast.error("Please select a time.");
      return;
    }

    const payload = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      phone: formData.phone,
      dateTime: mergeDateAndTime(
        formData.date as Date,
        formData.time as string,
      ),
    };

    mutate(payload, {
      onSuccess: (data: ApiResponse<ScheduleResponseType>) => {
        toast.success(data?.message);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          date: new Date(),
          time: "",
        });
      },
      onError: (error: Error) => {
        toast.error(error.message);
      },
    });
  };

  
  return (
    <div
      ref={modalRef}
      className="w-full min-w-100 lg:min-w-140 bg-(--background) p-8 rounded-xl relative"
    >
      <div className="absolute right-5 lg:right-3 top-5 lg:top-3">
        <button
          onClick={closeModal}
          className="w-6 h-6 bg-red-600 text-(--background) rounded-full flex items-center justify-center cursor-pointer"
        >
          <IoMdClose />
        </button>
      </div>

      {/* Form area */}
      <div className="space-y-4 lg:space-y-6 pt-3 lg:pt-5">
        <h4 className="capitalize">Book 30mins free consultation</h4>
        <span className="w-full h-px bg-(--foreground) block" />
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="space-y-2 lg:space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
              <InputField
                type="text"
                name="fname"
                value={formData.fname}
                onChange={(e) =>
                  setFormData({ ...formData, fname: e.target.value })
                }
                label="First Name"
                required={true}
              />

              <InputField
                type="text"
                name="lname"
                label="Last Name"
                value={formData.lname}
                onChange={(e) =>
                  setFormData({ ...formData, lname: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
              <InputField
                type="text"
                name="email"
                label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required={true}
              />

              <InputField
                type="text"
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required={true}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
              <DatePicker
                select={formData.date}
                setDate={(date) => setFormData({ ...formData, date: date })}
              />
              <SelectDropdown
                ariaLabel="Select time dropdown"
                label="Select Time"
                required={true}
                icon={<SlClock />}
                values={generateTimeSlot()}
                onChange={(time) => setFormData({ ...formData, time: time })}
              />
            </div>

            <PrimaryButton
              type="submit"
              name="Book Now"
              className="bg-(--foreground) text-(--background) mt-4"
              iconClass="bg-(--background) text-(--foreground)"
              loading={isPending}
            />

            
          </div>
        </form>
      </div>
    </div>
  );
}
