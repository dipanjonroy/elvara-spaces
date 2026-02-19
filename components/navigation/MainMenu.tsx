import { menus } from "@/lib/menus";
import Link from "next/link";

export default function MainMenu() {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-base xl:text-lg text-(--background) ">
        {menus.map((item) => (
          <span key={item.id} className="flex items-center -space-x-1 group">
            <span className="w-1.5 h-1.5 rounded-full bg-(--background) opacity-0 group-hover:opacity-100"/>
            <li className="group-hover:ps-3 transition-all duration-500">
              <Link href={item.url}>{item.name}</Link>
            </li>
          </span>
        ))}
      </ul>
    </nav>
  );
}
