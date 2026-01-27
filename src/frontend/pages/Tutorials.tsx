import { useEffect } from "react";

export default function Tutorials() {
  useEffect(() => {
    document.title = "Tutorials - Marker";
  }, []);
  return (
    <>
      <section className="mt-32">
        <h1 className="">Welcome To The Tutorials Page.</h1>
      </section>
    </>
  );
}
