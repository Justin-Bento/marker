import Logo from "./Logo";

export default function Header() {
  const linksToWebpage = ["home", "about", "support", "contact"];
  return (
    <header className="bg-white shadow-sm border-b border-primary-950/10">
      <div className="container mx-auto max-w-6xl py-8 grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 lg:col-span-1 flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <p className="inline-block lg:hidden">menu</p>
        </div>
        <nav className="col-span-2 hidden lg:col-span-1 lg:flex lg:items-center lg:justify-end">
          <ul className="flex items-center justify-between">
            {linksToWebpage.map((link: string, index: number) => {
              const isHome = link.toLowerCase() === "home";
              const href = isHome ? "/" : `/${link.toLowerCase()}`;
              return (
                <li key={index} className="">
                  <a
                    href={href}
                    className="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 capitalize"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
