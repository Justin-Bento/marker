export default function Home() {
  return (
    <>
      <section className="py-20">
        <h1 className="md:text-6xl max-w-[20ch] text-balance leading-20 text-left capitalize">
          It’s Easy to Lose Sight of Your Project’s Vision
        </h1>
        <p className="max-w-[80ch] text-pretty text-xl leading-10 mt-4 mb-12">
          Projects get paused. Plans change. Life interrupts. When you return,
          it’s hard to remember your steps or your purpose—and most project
          tools don’t make that any easier. This tracker helps you rebuild focus
          and get back on track effortlessly.
        </p>
        <a
          href="https://docs.google.com/document/d/1PuBIeAT3HBt4--GWk0KAV9K6Uo6pJJnQLcDqJNUgPN0/edit?usp=sharing"
          target="_blank"
          className="bg-primary-400 px-6 py-3 rounded-md capitalize hover:underline hover:cursor-pointer"
        >
          Download Template Today
        </a>
      </section>
      <section className="">
        <h2 className="landing-headline-laptop">
          A Document That Works With You!
        </h2>
        <p className="landing-copy-laptop">
          Traditional project trackers assume you already have all the details.
          This one doesn’t. It gives you room to think, write, and shape your
          project as it develops.
        </p>
        <div className="my-12">
          <p>What's Inside The Document?</p>
          <ul className="">
            <li className="">Cover Page</li>
            <li className="">Why Does It Matter?</li>
            <li className="">Where Will It Be Located?</li>
            <li className="">Brainstorming Dump</li>
            <li className="">Commitment & Completion</li>
            <li className="">Reflection & Lessons Learned</li>
          </ul>
        </div>
        <p className="">Remember: This is for your eyes only.</p>
      </section>
      <section className="">
        <h3 className="landing-headline-laptop">
          Don’t have Microsoft Office? no problem{" "}
        </h3>
        <p className="landing-copy-laptop">
          It's just a document that on the comptuer and is free for you to use
          and share. Here are some software I'd reccmend for the best expeeince
        </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="my-12 p-6 rounded-xl bg-black *:text-white border">
          <p className="text-xl font-bold tracking-wide capitalize">Access it On Your Local system</p>
          <ul className="">
            <li className="">Google Docs</li>
            <li className="">Apple Pages.</li>
            <li className="">Libre Office.</li>
            <li className="">Obsidian</li>
            <li className="">PDF</li>
          </ul>
        </div>
        <div className="my-12 p-6 rounded-xl bg-black *:text-white border">
            <p className="text-xl font-bold tracking-wide capitalize">Access it on the cloud.</p>
          <ul className="">
            <li className="">Google Docs</li>
            <li className="">Dropbox Paper</li>
            <li className="">Office Online</li>
          </ul>
        </div>
      </div>
      </section>
      <section className="">
        <h4 className="landing-headline-laptop">
          you are the project planner!
        </h4>
        <p className="landing-copy-laptop">
          At its core, this is a simple Word document. The structure is there to
          support you, but you are the planner who brings the project to life. I
          built this website to show how even one small idea can grow into
          something bigger—just like the site you’re on right now..
        </p>
      </section>
      <section className="">
        <h5 className="landing-headline-laptop">
          Here’s what other people have to say about
        </h5>
        <p className="landing-copy-laptop">
          You can open the Project Tracker in over 10 compatible formats. Google
          Docs, Word Online, Apple Pages, Libre Office and more. Use it on any
          device, only without installing extra software..
        </p>
      </section>
    </>
  );
}
