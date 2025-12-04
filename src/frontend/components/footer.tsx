import CompanyLogo from "../../../public/Marker_RGB_White.svg";

export default function Footer() {
  return (
    <footer className="bg-black *:text-white">
      <div className="wrapper py-12">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-2">
            <a href="/">
              <img src={CompanyLogo} className="w-32 m-0 p-0" />
            </a>
          </div>
          {/*  */}
          <div className="">
            <h6 className="">About Us</h6>
          </div>
          {/*  */}
          <div className="">
            <h6 className="">Support</h6>
          </div>
          {/*  */}
          <div className="">
            <h6 className="">Helpful Links</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
