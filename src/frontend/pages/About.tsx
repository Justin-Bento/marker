import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About - Marker";
  }, []);
  return (
    <>
      <section className="mt-32">
        <h1 className="">Welcome To The About Page.</h1>
      </section>
    </>
  );
}
