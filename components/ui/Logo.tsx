import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-full max-w-30 h-10">
      <Link href="/" className="relative block w-full h-full ">
        <Image
          loading="eager"
          src="/Elvara-logo.png"
          alt="Elvara spaces white logo"
          fill
          sizes="(max-widtth: 768px) 90px 120px"
          className="object-contain"
        />
      </Link>
    </div>
  );
}
