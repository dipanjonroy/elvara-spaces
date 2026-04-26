"use client";

import { toast } from "@/components/toast/Toast";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { isEmpty } from "@/helper/ValidateForm";
import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // Validate fields
  const validateFields = () => {
    if (isEmpty(newPassword)) {
      toast.error("Please enter new password");
      return;
    }

    if (isEmpty(confirmPassword)) {
      toast.error("Please re-enter the password");
      return;
    }
  };

  // Match the passwords
  const matchPassword = ()=>{
    if(newPassword !== confirmPassword){
      toast.error("Password doesn't match.");
      return
    }
  }

  // Handle reset password
  const handleResetPassword = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateFields();
    matchPassword();
    console.log(newPassword);
  };

  return (
    <form className="w-full" onSubmit={handleResetPassword}>
      <div className="relative w-full">
        <InputField
          name="password"
          label="New password"
          type={showNewPassword ? "text" : "password"}
          required={true}
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
          autoComplete="current-password"
        />

        <button
          type="button"
          className="absolute right-5 top-1/2 translate-y-1/2 cursor-pointer"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <div className="relative w-full mt-5 mb-8">
        <InputField
          name="password"
          label="Re-enter password"
          type={showConfirmPassword ? "text" : "password"}
          required={true}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          autoComplete="reenter-password"
        />

        <button
          type="button"
          className="absolute right-5 top-1/2 translate-y-1/2 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <PrimaryButton
        type="submit"
        loading={false}
        name="Reset now"
        className="bg-(--foreground) text-(--background) w-full rounded-lg"
        iconClass="bg-(--background) text-(--foreground)"
      />
    </form>
  );
}
