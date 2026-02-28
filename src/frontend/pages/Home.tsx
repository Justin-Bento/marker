import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Marker";
  }, []);
  return (
    <>
      <section className="">
        <h1 className="font-serif md:text-6xl max-w-[20ch] text-balance leading-20 text-left capitalize">
          It&rsquo;s Easy to Lose Sight of Your Project&rsquo;s Vision
        </h1>
        <p className="max-w-[80ch] text-pretty text-xl leading-10 mt-4 mb-8">
          Projects get paused. Plans change. Life interrupts. When you return,
          it&rsquo;s hard to remember your steps or your purpose&mdash;and most
          project tools don&rsquo;t make that any easier. This tracker helps you
          rebuild focus and get back on track effortlessly.
        </p>
        <a
          href="https://docs.google.com/document/d/1PuBIeAT3HBt4--GWk0KAV9K6Uo6pJJnQLcDqJNUgPN0/edit?usp=sharing"
          target="_blank"
          className="inline-flex items-center gap-2 bg-primary-900 text-primary-50 px-8 py-4 rounded-md text-lg font-medium hover:shadow-lg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-2 size-5 lucide lucide-download"
            aria-hidden="true"
          >
            <path d="M12 15V3"></path>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="m7 10 5 5 5-5"></path>
          </svg>
          Download Template Today
        </a>
        <div className="flex flex-col items-center gap-8">
          <img
            src="/media/scott-graham-5fNmWej4tAA-unsplash.jpg"
            alt=""
            className="w-full aspect-video rounded-xl  mt-12"
          ></img>
          <p className="text-sm capitalize text-gray-600">
            Thanks&nbsp;
            <a
              href="https://unsplash.com/@amstram"
              className="underline"
              target="_blank"
            >
              Scott Gram
            </a>
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="col-span-3">
          <h2 className="text-4xl font-serif mb-3 capitalize">
            A Document That Works With You!
          </h2>
          <p className="text-lg max-w-prose">
            Traditional project trackers assume you already have all the
            details. This one doesn&rsquo;t. It gives you room to think, write,
            and shape your project as it develops.
          </p>
        </div>
        <ul className="cols-span-2 lg:col-span-3 sm:grid grid-cols-subgrid  gap-8">
          <li className="rounded-lg border p-6 border-gray-400">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">Cover Page</p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
          <li className="rounded-lg border p-6 border-gray-500">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">
              Why Does It Matter?
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
          <li className="rounded-lg border p-6 border-gray-500">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">
              Where Will It Be Located?
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
          <li className="rounded-lg border p-6 border-gray-500">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">
              Brainstorming Dump
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
          <li className="rounded-lg border p-6 border-gray-500">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">
              Commitment & Completion
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
          <li className="rounded-lg border p-6 border-gray-500">
            <span className="block size-12 bg-primary-100 rounded-lg mb-4"></span>
            <p className="text-xl font-serif font-medium mb-2">
              Reflection & Lessons Learned
            </p>
            <p className="line-clamp-2 text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, consequuntur neque illo placeat earum pariatur fuga
              fugit dolor recusandae autem veritatis ipsam repellat sit aliquid
              quaerat optio ullam eligendi iusto.
            </p>
          </li>
        </ul>

        <p className="col-span-3 mt-6 text-gray-600 text-sm italic text-muted-foreground text-center">
          Remember: This is for your eyes only.
        </p>
      </section>
      <section className="bg-primary-100 rounded-3xl p-12 md:p-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-serif mb-6">
              Don't have Microsoft Office?
            </h3>
            <p className="text-lg text-gray-8 leading-relaxed mb-8">
              No problem! It's just a digital document, and you can open it with
              any word processor. Plus, it's completely free for you to use and
              share.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="p-8 rounded-2xl bg-black  text-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-2 size-6 fill-none lucide lucide-hard-drive"
                  aria-hidden="true"
                >
                  <line x1="22" x2="2" y1="12" y2="12"></line>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  <line x1="6" x2="6.01" y1="16" y2="16"></line>
                  <line x1="10" x2="10.01" y1="16" y2="16"></line>
                </svg>
                <p className="text-xl font-bold tracking-tight">Local Access</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 opacity-80 font-medium list-disc list-inside">
                <li>Apple Pages</li>
                <li>LibreOffice</li>
                <li>Obsidian</li>
                <li>Microsoft Word</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-primary-500/50 ">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-cloud w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
                <p className="text-xl font-bold tracking-tight">Cloud Access</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 opacity-80 font-medium list-disc list-inside">
                <li>Google Docs</li>
                <li>Dropbox Paper</li>
                <li>Office Online</li>
                <li>Notion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-16 lg:p-24 min-h-96 grid items-center text-white bg-black rounded-3xl">
        <div className="flex flex-col items-start lg:items-center gap-4">
          <span className="flex flex-col-reverse items-center gap-4">
            <h4 className="text-4xl font-serif mb-3 capitalize">
              you are the project planner!
            </h4>
            <p className="bg-primary-500/25  text-xs rounded-full font-sans uppercase tracking-wide font-bold w-fit px-4 pt-2 pb-2 align-baseline">
              Take Controll
            </p>
          </span>
          <p className="text-xl text-gray-4 lg:text-center leading-relaxed lg:max-w-[80ch]">
            At its core, this is a simple Word document. The structure is there
            to support you, but you are the planner who brings the project to
            life. I built this website to show how even one small idea can grow
            into something bigger&mdash;just like the site you&rsquo;re on right
            now.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-18">
          <div className="col-span-2 lg:col-span-1 rounded-lg bg-gray-800 w-full p-8">
            <p className="font-serif text-white text-xl mb-2">
              Self-Governed Pace
            </p>
            <p className="leading-7 text-gray-5">
              No ticking clocks or push notifications. You decide when the
              session starts and ends.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 rounded-lg bg-gray-800 w-full p-8">
            <p className="font-serif text-white text-xl mb-2">
              Guided Frameworks
            </p>
            <p className="leading-7 text-gray-5">
              The template provides the 'Skeleton' (Why, How, When), but you
              bring the 'Meat' (Your Vision).
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 rounded-lg bg-gray-800 w-full p-8">
            <p className="font-serif text-white text-xl mb-2">Total Privacy</p>
            <p className="leading-7 text-gray-5">
              Local storage by default. No cloud sync unless you choose Your
              ideas stay between you and the page.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 rounded-lg bg-gray-800 w-full p-8">
            <p className="font-serif text-white text-xl mb-2">
              Open Format Architecture
            </p>
            <p className="leading-7 text-gray-5">
              It's a .docx file. You own the structure. Delete sections, add
              your own, or merge with other systems..
            </p>
          </div>
          <div className="col-span-2 rounded-lg bg-orange-900/70 w-full p-8">
            <p className="leading-7 text-gray-1 max-w-[80ch] text-balance">
              The structure is there to support you, but you are the planner who
              brings the project to life. We provide the map; you decide where
              the journey goes.
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 w-full min-h-96 rounded-2xl">
        <div className="p-6 lg:px-24 grid items-center max-w-6xl grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0 capitalize">
              Ready to build your next project?
            </h2>
            <p>
              Experience the beauty of building a copmlex project from scratch
              with something as simple document and your ideas.
            </p>
            <a
              href="https://github.com/Justin-Bento/marker"
              className="bg-gray-900 text-gray-50  [a]:hover:bg-gray-800 text-sm font-medium inline-flex items-center justify-center whitespace-nowrap transition-all h-8 gap-1.5 px-2.5 rounded-md"
              target="_blank"
            >
              Fork Edit & Deploy
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <img
              src="/image-placeholder.webp"
              alt=""
              className="rounded-xl aspect-video"
            />
          </div>
        </div>
      </section>
    </>
  );
}
