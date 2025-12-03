import CompanyLogo from "../../../public/Marker_RGB_Black.svg";

export default function Header() {
  const linksToWebpage = ["home", "about", "tutorials", "contact", "support"];
  return (
    <header className="sticky top-0 z-90 bg-white shadow-sm border-b border-primary-950/10">
      <section className="wrapper py-8">
        <img src={CompanyLogo} className="w-32 m-0 p-0" />
        <nav className="">
          <ul className="">
            {linksToWebpage.map((link: string, index:number) => {
              return (
                <li key={index} className="">
                  <a href={`/${link.toLocaleLowerCase()}`} className="capitalize">{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
}
