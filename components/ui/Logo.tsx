import Image from "next/image";
import Link from "next/link";

type VariantType = "white" | "black";

export default function Logo({ variant }: { variant: VariantType }) {
  const logoUrl =
    variant === "white" ? "/Elvara-logo-white.png" : "/Elvara-logo-black.png";
  const logoAlt =
    variant === "white"
      ? "Elvara spaces white logo"
      : "Elvara spaces black logo";

  return (
    <div className="w-24 xl:w-26 2xl:w-30 h-8 lg:h-10 transition-all duration-300">
      <Link href="/" className="relative block w-full h-full ">
        <Image
          loading="eager"
          src={logoUrl}
          alt={logoAlt}
          fill
          sizes="(max-width: 768px) 90px 120px"
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}
