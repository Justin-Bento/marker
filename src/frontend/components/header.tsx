import CompanyLogo from "../../../public/Marker_RGB_Black.svg";

export default function Header() {
  const linksToWebpage = ["home", "about", "tutorials", "contact", "support"];
  return (
    <header className="sticky top-0 z-90 bg-white shadow-sm border-b border-primary-950/10">
      <section className="wrapper py-8 grid grid-cols-2 items-center">
      <a href="/">
        <img src={CompanyLogo} className="w-32 m-0 p-0" />
      </a>
        <nav className="">
          <ul className="flex items-center justify-end gap-4">
            {linksToWebpage.map((link: string, index:number) => {
              const isHome = link.toLowerCase() === "home";
              const href = isHome ? '/' : `/${link.toLowerCase()}`;
              return (
                <li key={index} className="">
                  <a href={href} className="capitalize hover:underline">{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
}
