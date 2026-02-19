export default function Header() {
  const linksToWebpage = ["home", "about", "support", "contact"];
  return (
    <header className="bg-white shadow-sm border-b border-primary-950/10">
      <div className="wrapper py-8 grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 lg:col-span-1 flex items-center justify-between">
          <a href="/">
            <img src="/Marker_RGB_Black.svg" className="w-32 m-0 p-0" />
          </a>
          <p className="inline-block lg:hidden">menu</p>
        </div>
        <nav className="col-span-2 hidden lg:col-span-1 lg:flex lg:items-center lg:justify-end">
          <ul className="flex items-center justify-between gap-4">
            {linksToWebpage.map((link: string, index: number) => {
              const isHome = link.toLowerCase() === "home";
              const href = isHome ? "/" : `/${link.toLowerCase()}`;
              return (
                <li key={index} className="">
                  <a href={href} className="capitalize hover:underline">
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
