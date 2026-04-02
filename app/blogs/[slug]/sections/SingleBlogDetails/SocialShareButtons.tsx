"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialShareButtons() {
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const pathName = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fullUrl = `${baseUrl}${pathName}`;

  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${fullUrl}`;
  const xShare = `https://x.com/intent/tweet?url=${fullUrl}&text=check this out!`;

  const handleInstgramCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedText(true);
    } catch(err) {
      console.log(err);
      setCopiedText(false);
    }
  };

  useEffect(()=>{
    if(!copiedText) return;

    const timer = setTimeout(()=>{
      setCopiedText(false);
    },4000);

    return ()=>clearTimeout(timer);
  })

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href={linkedinShare}
          className="hover:-translate-y-1 transition-transform  duration-200 ease-in"
        >
          <FaLinkedin className="text-xl" />
        </Link>

        <button
          onClick={handleInstgramCopy}
          className="cursor-pointer hover:-translate-y-1 transition-transform duration-200 ease-in"
        >
          <FaInstagram className="text-xl" />
        </button>

        <Link
          href={xShare}
          className="hover:-translate-y-1 transition-transform  duration-200 ease-in"
        >
          <FaXTwitter className="text-xl" />
        </Link>
      </div>

      {copiedText && <p className={`text-sm font-medium ${copiedText ? "text-green-700":"text-red-500"}`}>{copiedText ? "Post URL copied!":"Failed to copy hte URL"}</p>}
    </>
  );
}
