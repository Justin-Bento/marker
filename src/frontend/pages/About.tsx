import { useEffect } from "react";
import {
  HiDownload,
  HiOutlineDocument,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function About() {
  useEffect(() => {
    document.title = "About - Marker";
  }, []);
  const values = [
    {
      icon: <HiOutlineDocument className="size-6" />,
      title: "Radical Simplicity",
      description:
        "No accounts, no subscriptions, no complex databases. Just a file that lives on your machine.",
    },
    {
      icon: <HiOutlineUser className="size-6" />,
      title: "True Ownership",
      description:
        "Your data shouldn't be trapped in a proprietary cloud. A .docx file is yours forever.",
    },
    {
      icon: <HiOutlineViewGrid className="size-6" />,
      title: "Focus by Design",
      description:
        "We stripped away the notifications and 'collaboration features' that actually just distract you.",
    },
  ];
  return (
    <>
      <section className="text-balance space-y-6 leading-7 font-serif text-center">
        <h1 className="text-6xl tracking-wide  text-balance">The Vision</h1>
        <p className="text-2xl italic text-gray-8">
          "Software should serve the user, not the other way around."
        </p>
      </section>
      <section className="max-w-[80ch] mx-auto space-y-6 [&>p]:leading-8 [&>p]:text-gray-8">
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
        <div className="overflow-hidden rounded-lg bg-primary-600/9 dark:bg-gray-800/50 border-l-2 border-primary-600  dark:outline dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-primary-600 font-serif">Why a Word Document?</p>
            <p className="text-sm mt-1.5 leading-7 tracking-wide text-pretty">
              Because it's universal. You can open it in 1995 or 2045. You can
              print it. You can email it. You can edit it offline in a cabin in
              the woods. It gives you total control over your environment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-21">
          {values.map((value) => {
            return (
              <div className="overflow-hidden rounded-lg bg-primary-200/10 border  border-primary-200 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
                <div className="px-4 py-5 sm:p-6">
                  <span className="w-12 h-12 rounded-full  bg-orange-600/5 text-primary-900  flex items-center justify-center mb-6">
                    {value.icon}
                  </span>
                  <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                  <p className="text-sm text-balance">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-y-6 text-center">
        <HiOutlineHeart className="w-8 h-8 text-primary-600 fill-primary-600/20" />
        <h2 className="text-3xl font-serif text-gray-9 capitalize">
          Ready to start?
        </h2>
        <p className="text-gray-8 my-3 capitalize max-w-xl mx-auto text-lg">
          No sign-ups. No credit cards. Just download the template and start
          planning your next big idea.
        </p>
        <a
          href="https://docs.google.com/document/d/1PuBIeAT3HBt4--GWk0KAV9K6Uo6pJJnQLcDqJNUgPN0/edit?usp=sharing"
          target="_blank"
          className="inline-flex items-center gap-2 bg-primary-900 text-primary-50 px-6 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-all w-fit"
        >
          <HiDownload className="w-5 h-5" /> Download Template
        </a>
      </section>
    </>
  );
}
