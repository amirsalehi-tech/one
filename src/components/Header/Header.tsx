import {ButtonWithIcon} from "../Button/Button";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-background-secondary rounded-[18px] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Login Button */}
        {/* Right: Logo and Navbar grouped together */}
        <div className="flex items-center gap-10">
          <Logo />
          <Navbar />
        </div>
        <ButtonWithIcon />
      </div>
    </header>
  );
};

export default Header;
