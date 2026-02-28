import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Marker";
  }, []);
  return (
    <>
      <article className="grid md:grid-cols-2 gap-10 mx-auto">
        <section className="">
          <div>
            <h2 className="font-medium text-2xl text-gray-800">
              Contact Marker
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 mt-3">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <ul className="[&>li]:not-first:mt-1.5 mt-6 ml-6 list-inside">
              <li className="text-gray-800">1734 Sanfransico, CA 93063</li>
              <li className="text-gray-800">
                <a href="mailto:hello@astroshipstarter.com">hello@marker.com</a>
              </li>
              <li className="text-gray-800">
                <a href="tel:+1 (987) 4587 899">+1 (987) 4587 899</a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <ContactForm />
        </section>
      </article>
    </>
  );
}
