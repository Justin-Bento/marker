import { useEffect } from "react";
import ContactForm from "../components/contactform";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Marker";
  }, []);
  return (
    <>
      <article className="grid md:grid-cols-2 gap-10 mx-auto mt-16">
        <section className="">
          <div>
            <h2 className="font-medium text-2xl text-gray-800">
              Contact Marker
            </h2>
            <p className="text-lg leading-relaxed text-slate-500 mt-3">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <div className="mt-5">
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <a href="mailto:hello@astroshipstarter.com">hello@marker.com</a>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <a href="tel:+1 (987) 4587 899">+1 (987) 4587 899</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ContactForm />
        </section>
      </article>
    </>
  );
}
