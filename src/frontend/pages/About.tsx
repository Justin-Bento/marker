import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About - Marker";
  }, []);
  return (
    <>
      <section className="max-w-prose text-balance space-y-6 leading-7">
        <h1 className="scroll-m-20 text-4xl font-extrabold text-balance">
          What Is Marker?
        </h1>
        <p>
          Marker is a simple word document that is designed to help people track
          projects and reflect on their learning. Its goal is to capture ideas,
          document outcomes, and generate insights that support future
          improvement.
        </p>
        <p>
          The project originally began as a Chrome extension and was later
          rebuilt as a React application after the project’s direction changed
          to a word document. This drastic change was necessary due to
          unnecessary abstraction leaving me and other people more confused.
        </p>
      </section>
    </>
  );
}
