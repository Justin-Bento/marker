import { useEffect } from "react";

export default function Support() {
  useEffect(() => {
    document.title = "Support - Marker";
  }, []);
  return (
    <>
      <section className="mt-32">
        <h1 className="">Welcome To The Support Page.</h1>
      </section>
    </>
  );
}
