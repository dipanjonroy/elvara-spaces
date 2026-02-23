import Link from "next/link";
import SocialMedia from "../shared/SocialMedia";
import Logo from "../ui/Logo";
import { menus } from "@/lib/menus";

const SERVICES = [
  { id: 1, name: "Residential", url: "#" },
  { id: 2, name: "Commercial", url: "#" },
  { id: 3, name: "Bedroom", url: "#" },
  { id: 4, name: "Renovation", url: "#" },
  { id: 5, name: "False Ceiling", url: "#" },
  { id: 6, name: "Kitchen", url: "#" },
];

export default function Footer() {
  return (
    <footer className="p-6">
      <div className="w-full h-full bg-(--foreground) rounded-4xl py-16">
        <div className="container mx-auto text-(--background)">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Busniness Info */}
            <div className="space-y-6">
              <Logo variant="white" />
              <p className="leading-tight">
                We design and renovate residential and commercial spaces with a
                perfect balance of functionality, comfort, and aesthetics.
              </p>
              <SocialMedia className="mt-8" />
            </div>

            {/* Navigation */}
            <div className="space-y-7">
              <h3>Pages</h3>
              <div className="text-sm lg:text-base inline-flex flex-col space-y-3">
                {menus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="transition-all duration-300 ease-in-out hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Utility Pages */}
            <div className="space-y-7">
              <h3>Our Services</h3>
              <div className="text-sm lg:text-base inline-flex flex-col space-y-3">
                {SERVICES.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="transition-all duration-300 ease-in-out hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="space-y-7">
              <h3>Our Services</h3>
              <div className="text-sm lg:text-base  inline-flex flex-col space-y-3">
                <span>info@elvaraspaces.com</span>
                <span>(555) 345-6789</span>
                <span>567 Jac Spruce Crescent,</span>
                <span>Montreal, QC H3A 2K3</span>
              </div>
            </div>
          </div>

          {/* Business name */}
          <div className="flex items-center justify-center mt-14">
            <span className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[150px] font-bold">ELVARA-SPACES</span>
          </div>
          
          <div className="flex items-center justify-center mt-12">
            <span className="inline-block text-sm center">&copy; Elvara-Spaces, All right reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
