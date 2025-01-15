import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo_me.png";
import { navItems } from "../constant";


export default function NavBar() {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-gray-800">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-6 w-6 mr-2" src={logo} alt="Logo" />
            <span className="text-sm font-medium tracking-tight text-white">Agata.Dev</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a className="rounded-md px-3 py-2 text-sm font-medium text-black-800 hover:bg-gray-700 hover:text-white" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>

  );


}