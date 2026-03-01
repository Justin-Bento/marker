import { useEffect } from "react";
import { HiDownload, HiOutlineHeart } from "react-icons/hi";
import { values } from "../../data";

export default function About() {
  useEffect(() => {
    document.title = "About - Marker";
  }, []);

  return (
    <>
      <section className="text-balance space-y-6 leading-7 font-serif text-center">
        <h1 className="font-serif text-5xl/12 tracking-tight text-balance sm:text-[5rem]/20 dark:text-white">
          The Vision
        </h1>
        <p className="text-xl/9 text-gray-700 dark:text-gray-200 capitalize">
          "Software should serve the user, not the other way around."
        </p>
      </section>
      <section className="max-w-[80ch] mx-auto space-y-6 [&>p]:leading-8 [&>p]:text-gray-800 dark:[&>p]:text-gray-200">
        <p>
          Marker started with a simple observation: most productivity tools are
          more interested in keeping you on their platform than helping you
          finish your project.
        </p>
        <p>
          We believe the best tool for deep work isn't a complex web app with a
          thousand integrations. It's a blank page with just enough structure to
          keep you moving. That's why WordDock isn't an "app" in the traditional
          sense—it's a carefully crafted <strong>.docx template</strong>.
        </p>
        <div className="overflow-hidden rounded-lg bg-primary-600/9 dark:bg-primary-600/50 border-l-2 border-primary-600">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-primary-600 font-serif dark:text-primary-50">
              Why a Word Document?
            </p>
            <p className="text-sm mt-1.5 leading-7 tracking-wide text-pretty dark:text-primary-50">
              Because it's universal. You can open it in 1995 or 2045. You can
              print it. You can email it. You can edit it offline in a cabin in
              the woods. It gives you total control over your environment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-21">
          {values.map((value) => {
            return (
              <div className="rounded-md bg-primary-950/2.5 p-6 text-sm/7 text-primary-950 dark:bg-white/5 dark:text-white">
                <div className="px-4 py-5 sm:p-6">
                  <span className="w-12 h-12 rounded-full  bg-primary-600/5 text-primary-900 dark:bg-primary-300  flex items-center justify-center mb-6">
                    {value.icon}
                  </span>
                  <h3 className="text-lg font-semibold font-serif mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm/6 text-balance text-gray-700 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-y-6 text-center">
        <HiOutlineHeart className="w-8 h-8 text-primary-600 fill-primary-600/20" />
        <h2 className="text-3xl font-serif text-gray-900 dark:text-white capitalize">
          Ready to start?
        </h2>
        <p className="text-gray-800 dark:text-white my-3 capitalize max-w-xl mx-auto text-lg">
          No sign-ups. No credit cards. Just download the template and start
          planning your next big idea.
        </p>
        <a
          href="https://docs.google.com/document/d/1PuBIeAT3HBt4--GWk0KAV9K6Uo6pJJnQLcDqJNUgPN0/edit?usp=sharing"
          target="_blank"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full text-sm/7 font-medium bg-primary-950 text-white hover:bg-primary-800 dark:bg-primary-300 dark:text-primary-950 dark:hover:bg-primary-200 px-4 py-2"
        >
          <HiDownload className="w-5 h-5" /> Download Template
        </a>
      </section>
    </>
  );
}
