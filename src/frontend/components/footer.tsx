import CompanyLogo from "../../../public/Marker_RGB_White.svg";

export default function Footer() {
  return (
    <footer className="bg-black *:text-white">
      <section className="wrapper py-8">
       <a href="/">
        <img src={CompanyLogo} className="w-32 m-0 p-0" />
      </a>
      </section>
    </footer>
  );
}
