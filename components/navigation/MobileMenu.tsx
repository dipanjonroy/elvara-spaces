"use client";

import { menus } from "@/lib/menus";
import Link from "next/link";
import { forwardRef } from "react";

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu = forwardRef<HTMLUListElement, MobileMenuProps>(
  ({ closeMenu }, ref) => {
    return (
      <nav className="lg:hidden">
        <ul ref={ref} className="space-y-5">
          {menus.map((item) => (
            <li onClick={closeMenu} key={item.id} className="text-base">
              <Link href={item.url} scroll={true}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
