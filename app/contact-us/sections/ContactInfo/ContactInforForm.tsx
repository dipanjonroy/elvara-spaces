"use client";

import InputField from "@/components/ui/InputField";
import SelectChecklist from "@/components/ui/SelectChecklist";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TextArea from "@/components/ui/TextArea";
import { useState } from "react";
import { isEmpty } from "@/helper/ValidateForm";
import { toast } from "@/components/toast/Toast";

const PROJECT_TYPE = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Rennovation", value: "rennovation" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Ceiling", value: "ceiling" },
];

const PROJECT_BUDGET = [
  { label: "Under $50k", value: "under-50k" },
  { label: "$50K - $100K", value: "50K-100K" },
  { label: "$100K - $500K", value: "100K-500K" },
  { label: "$500K - $1M", value: "500K-1M" },
];

type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
  types: string[];
  budget: string;
};

export default function ContactInforForm() {
  // Forms states
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    types: [],
    budget: "",
  });

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if(isEmpty(formData.name)){
      toast.error("Please enter your name")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-10">
      {/* Personal Details */}
      <div className="space-y-7">
        <h3>Personal Details</h3>

        <div className="space-y-4">
          <InputField
            label="Your name"
            name="name"
            placeholder="Write your name"
            type="text"
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
            required={true}
          />
          <InputField
            label="Email"
            name="email"
            placeholder="Email address"
            type="email"
            onChange={(e)=>setFormData({...formData, email:e.target.value})}
            required={true}
          />
          <InputField
            label="Phone"
            name="phone"
            placeholder="Phone number"
            type="text"
            onChange={(e)=>setFormData({...formData, phone:e.target.value})}
            required={true}
          />
          <InputField
            label="Company name(Optional)"
            name="company"
            placeholder="Company name here"
            type="text"
            onChange={(e)=>setFormData({...formData, company:e.target.value})}
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-7">
        <h3>Project Details</h3>

        <div className="space-y-8">
          <TextArea
            label="About project"
            name="aboutProject"
            placeholder="Write us about projects"
            required={true}
            onChange={(e)=>setFormData({...formData, projectDetails:e.target.value})}
          />

          <SelectChecklist
            label="Project types"
            options={PROJECT_TYPE}
            selectedValues={formData.types}
            onChange={(val) => setFormData({ ...formData, types: val })}
            required={true}
            variant="multi"
          />

          <SelectChecklist
            label="Project budget"
            options={PROJECT_BUDGET}
            selectedValue={formData.budget}
            onChange={(val) => setFormData({ ...formData, budget: val })}
            required={true}
            variant="single"
          />
        </div>
      </div>

      {/* Submit button */}
      <PrimaryButton
        type="submit"
        name="Send Message"
        className="bg-(--foreground) text-(--background)"
        iconClass="bg-(--background) text-(--foreground)"
      />
    </form>
  );
}
