import { menus } from "@/lib/menus";
import Link from "next/link";
import { forwardRef } from "react";

const MobileMenu = forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <nav className="lg:hidden">
      <ul ref={ref} className="space-y-5">
        {menus.map((item) => (
          <li key={item.id} className="text-base">
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;