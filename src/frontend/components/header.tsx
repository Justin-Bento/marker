import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const linksToWebpage = ["home", "about", "support", "contact"];
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="dark:*:text-gray-100 shadow-sm border-b border-primary-950/10">
      <div className="wrapper py-8 grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 lg:col-span-1 flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <button
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setNavOpen(!navOpen)}
            className="inline-flex items-center font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-50 h-8 p-4 dark:hover:bg-brand-primary-50/10 lg:hidden"
          >
            {navOpen ? "close" : "menu"}
          </button>
        </div>
        <nav
          id="primary-nav"
          aria-label="Primary navigation"
          className={`col-span-2 lg:col-span-1 lg:flex lg:items-center lg:justify-end ${
            navOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between">
            {linksToWebpage.map((link: string, index: number) => {
              const isHome = link.toLowerCase() === "home";
              const href = isHome ? "/" : `/${link.toLowerCase()}`;
              return (
                <li
                  key={index}
                  className="font-medium rounded-lg px-3 py-2 capitalize"
                >
                  <a href={href}>{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
