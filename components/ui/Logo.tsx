import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-20 md:w-24 xl:w-30 h-6 lg:h-10 transition-all duration-300">
      <Link href="/" className="relative block w-full h-full ">
        <Image
          loading="eager"
          src="/Elvara-logo.png"
          alt="Elvara spaces white logo"
          fill
          sizes="(max-width: 768px) 90px 120px"
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}
