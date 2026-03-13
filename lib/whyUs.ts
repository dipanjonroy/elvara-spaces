import { LuWorkflow } from "react-icons/lu";
import { FaCube } from "react-icons/fa";
import { LuBadgeDollarSign } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { LuHeartHandshake } from "react-icons/lu";

type ChooseItems = {
  id:number;
  icon:React.ElementType;
  title:string;
  desc:string;
}

export const whyUs:ChooseItems[]=[
  {
    id:1,
    icon:LuWorkflow,
    title:"End-to-end Service",
    desc:"We handle every stage of your project—from initial concept and design to final execution and finishing touches. Our team coordinates every detail, so you experience a seamless, stress-free journey. No gaps, no handoffs, just a complete solution under one expert team."
  },
  {
    id:2,
    icon:FaCube,
    title:"3D Visualization Before Execution",
    desc:"See your space before we build it with realistic 3D visualizations. This allows you to explore layouts, materials, and finishes in advance. It ensures your vision is accurately captured and nothing is left to guesswork."
  },
  {
    id:3,
    icon:LuBadgeDollarSign,
    title:"Transparent Budget & Timeline",
    desc:"We provide clear cost estimates and realistic timelines before any work begins. Every expense and deadline is communicated upfront, so there are no surprises. You stay in control, confident that your project stays on track."
  },
  {
    id:4,
    icon:LuShieldCheck,
    title:"Quality Materials & Trusted Vendors",
    desc:"We source only premium materials and work with reliable vendors to guarantee lasting results. Every fixture, finish, and furnishing is carefully chosen for durability and style. Our clients benefit from a superior standard that elevates every space we touch."
  },
  {
    id:5,
    icon:LuHeartHandshake,
    title:"Client-Centric Approach",
    desc:"Your needs, preferences, and lifestyle are at the heart of every design decision. We listen, adapt, and guide you throughout the project to ensure your satisfaction. Our goal is not just to deliver a space—but to create an experience you’ll love."
  },
]