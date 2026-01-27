import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Marker";
  }, []);
  return (
    <>
      <section className="mt-32">
        <h1 className="">Welcome To The Contact Page.</h1>
      </section>
    </>
  );
}
