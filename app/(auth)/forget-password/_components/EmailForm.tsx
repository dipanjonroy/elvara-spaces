"use client";

import { toast } from "@/components/toast/Toast";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { isEmail, isEmpty } from "@/helper/ValidateForm";
import { useState } from "react";

export default function EmailForm() {
  const [email,setEmail] = useState<string>("");

  const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();

    // Email validation
    if(isEmpty(email)){
      toast.error("Email is required.");
      return
    }
    if(!isEmail(email)){
      toast.error("Email is not valid.");
      return
    };

    console.log(email)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full space-y-6 lg:space-y-8">
        <InputField
          type="text"
          name="email"
          label="Email"
          required={true}
          placeholder="your email here..."
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <PrimaryButton
          type="submit"
          loading={false}
          name="Send Email"
          className="bg-(--foreground) text-(--background) w-full rounded-lg"
          iconClass="bg-(--background) text-(--foreground)"
        />
      </div>
    </form>
  );
}
