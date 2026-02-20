"use client"

import MainMenu from "../navigation/MainMenu"
import Logo from "../ui/Logo"
import MainButton from "../ui/MainButton";

export default function Header() {
  return (
    <header className="fixed inset-0 z-10 top-6">
      <div className="container mx-auto">
        <div className="w-full ps-6 pe-3 py-3 bg-white/15 backdrop-blur-2xl rounded-full border border-(--white-border)">
          <div className="w-full flex items-center justify-between">
            <Logo/>
            <MainMenu/>
            
            <MainButton className="hidden lg:inline-block" onClick={()=>console.log("Open booking modal")}/>
            
            <button className="lg:hidden"></button>
          </div>
        </div>
      </div>
    </header>
  );
}
