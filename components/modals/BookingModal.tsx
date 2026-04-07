import { IoMdClose } from "react-icons/io";
import InputField from "../ui/InputField";
import DatePicker from "../ui/DatePicker";
import SelectDropdown from "../ui/SelectDropdown";
import { generateTimeSlot } from "@/lib/generateTimeSlot";
import PrimaryButton from "../ui/PrimaryButton";
import { SlClock } from "react-icons/sl";

export default function BookingModal() {
  return (
    <div className="w-full min-w-100 lg:min-w-140 bg-(--background) p-8 rounded-xl relative">
      <div className="absolute right-3 top-3">
        <button className="w-6 h-6 bg-red-600 text-(--background) rounded-full flex items-center justify-center cursor-pointer">
          <IoMdClose />
        </button>
      </div>

      {/* Form area */}
      <div className="space-y-6 pt-5">
        <h3 className="capitalize">Book 30mins free consultation</h3>

        <form className="mt-10">
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <InputField
                type="text"
                name="fname"
                label="First Name"
                required={true}
              />

              <InputField type="text" name="lname" label="Last Name" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <InputField
                type="text"
                name="email"
                label="Email"
                required={true}
              />

              <InputField
                type="text"
                name="phone"
                label="Phone Number"
                required={true}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <DatePicker />
              <SelectDropdown
                ariaLabel="Select time dropdown"
                label="Select Time"
                required={true}
                icon={<SlClock/>}
                values={generateTimeSlot()}
              />
            </div>

            <PrimaryButton
              type="submit"
              name="Book Now"
              className="bg-(--foreground) text-(--background) mt-4"
              iconClass="bg-(--background) text-(--foreground)"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
