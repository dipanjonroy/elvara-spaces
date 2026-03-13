import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const DATA = [
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    url: "http://www.instagram.com",
  },
  { id: 2, name: "X", icon: FaXTwitter, url: "http://www.x.com" },
  {
    id: 3,
    name: "Facebook",
    icon: FaFacebookF,
    url: "http://www.facebook.com",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: FaLinkedinIn,
    url: "http://www.linkedin.com",
  },
];

interface SociaMediaProps {
  className?: string;
}

export default function SocialMedia({className}:SociaMediaProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {DATA.map((item) => (
        <Link key={item.id} href={item.url} className="transition-all duration-300 ease-in-out hover:-translate-y-2">
          <span className="inline-flex w-8 h-8 rounded-full items-center justify-center bg-(--background) text-(--text-color)">
            <item.icon/>
          </span>
        </Link>
      ))}
    </div>
  );
}
