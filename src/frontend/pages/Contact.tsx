import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Marker";
  }, []);
  return (
    <>
      <article className="grid md:grid-cols-2 gap-10 mx-auto">
        <div className="col-span-2">
          <h2 className="font-serif text-5xl/12 tracking-tight text-balance sm:text-[5rem]/20 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-xl/8 font-serif text-gray-900 dark:text-gray-300 mt-3 max-w-xl">
            Have a question or just want to share how you're using Marker? Reach
            out — we'd love to hear from you.
          </p>
        </div>
        <div className="space-y-3">
          <div className="border-l-2 rounded-r-xl bg-gray-200 text-gray-800 flex items-center pl-6 dark:bg-gray-800 dark:text-white">
            <span className="py-3">
              <p className="font-medium">Email Us</p>
              <a href="mailto:hello@marker.com" className="underline text-sm">
                hello@marker.com
              </a>
            </span>
          </div>
          <div className="border-l-2 rounded-r-xl bg-gray-200 text-gray-800 flex items-center pl-6 dark:bg-gray-800 dark:text-white">
            <span className="py-3">
              <p className="font-medium">Community</p>
              <p className="text-sm">Join our focus-driven writing group.</p>
            </span>
          </div>
          <blockquote className="border-2 rounded-xl bg-gray-200 text-gray-800 pl-6 py-3 font-serif italic dark:bg-gray-800 dark:text-white">
            "The best ideas often start with a single message. Don't hesitate to
            reach out if you're stuck or just want to talk shop about deep
            work."
          </blockquote>
        </div>
        <div className="border border-gray-700 p-6 rounded-2xl">
          <ContactForm />
        </div>
      </article>
    </>
  );
}
