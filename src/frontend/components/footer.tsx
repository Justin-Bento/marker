export default function Footer() {
  return (
    <footer className="bg-black *:text-white">
      <div className="wrapper px-6 py-12 lg:p-12">
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-4 lg:col-span-2">
            <a href="/" className="block">
              <img src="/Marker_RGB_White.svg" className="w-32 m-0 p-0" />
            </a>
            <p className="mt-6 tex-sm leading-7 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, cupiditate. Dolorum voluptatibus laborum.
            </p>
          </div>
          {/*  */}
          ="{" "}
          <div className="col-span-1 flex flex-col lg:items-end lg:*:text-right">
            <h6 className="">About Us</h6>
            <ul className="mt-3">
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href=""> </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="col-span-1 flex flex-col lg:items-end lg:*:text-right">
            <h6 className="">Support</h6>
            <ul className="mt-3">
              <li>
                <a href="" className="">
                  Link ItCompanyLogoem Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href=""> </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="col-span-1 flex flex-col lg:items-end lg:*:text-right">
            <h6 className="">Helpful Links</h6>
            <ul className="mt-3">
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href="" className="">
                  Link Item Here
                </a>
              </li>
              <li>
                <a href=""> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
