import MainMenu from "../navigation/MainMenu"
import Logo from "../ui/Logo"

export default function Header() {
  return (
    <header className="fixed inset-0 z-10 top-6">
      <div className="container mx-auto">
        <div className="w-full px-10 py-4 bg-white/15 backdrop-blur-2xl rounded-full border border-(--white-border)">
          <div className="w-full flex items-center justify-between">
            <Logo/>
            <MainMenu/>
            <div>Button</div>
          </div>
        </div>
      </div>
    </header>
  );
}
