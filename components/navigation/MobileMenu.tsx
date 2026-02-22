import { menus } from "@/lib/menus";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <nav className="lg:hidden">
      <ul className="space-y-5">
        {
          menus.map((item)=>(
            <li key={item.id} className="text-base">
              <Link href={item.url}>{item.name}</Link>
            </li>
          )
            )
        }
      </ul>
    </nav>
  );
}