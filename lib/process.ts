import { LuMessageSquare } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { LuHammer } from "react-icons/lu";

type ProcessTypes = {
  id: number;
  title: string;
  desc: string;
  icon: React.ElementType;
};

export const processData: ProcessTypes[] = [
  {
    id: 1,
    title: "Consultation",
    desc: "We begin by understanding your space, needs, lifestyle, and budget. This helps us align expectations and define clear project goals from day one.",
    icon: LuMessageSquare,
  },

  {
    id: 2,
    title: "Design Planning",
    desc: "Our team develops layouts, material selections, and design concepts tailored to your space. Every decision balances functionality, aesthetics, and long-term usability.",
    icon: LuPencilRuler,
  },

  {
    id: 3,
    title: "3D Visualization",
    desc: "We create detailed 3D visuals so you can see the design before execution begins. This ensures clarity, confidence, and the opportunity to refine details early.",
    icon: LuBox,
  },

  {
    id: 4,
    title: "Execution",
    desc: "Once approved, our team brings the design to life with careful coordination and quality control. We manage timelines, vendors, and workmanship to ensure smooth execution.",
    icon: LuHammer,
  },
];
