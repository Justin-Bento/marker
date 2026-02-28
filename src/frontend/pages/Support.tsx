import { useEffect } from "react";
import { faq } from "../../data";

export default function Support() {
  useEffect(() => {
    document.title = "Support - Marker";
  }, []);
  return (
    <>
      <section className="max-w-[80ch] mx-auto text-center space-y-6">
        <h1 className="font-serif text-5xl/12 tracking-tight text-balance sm:text-[5rem]/20">
          Support & Documentation.
        </h1>
        <p className="text-xl/9 text-gray-700 capitalize font-serif">
          How to use the WordDock system to master any skill.
        </p>
      </section>
      <section className="max-w-[80ch] mx-auto bg-gray-300/30 p-12 rounded-2xl text-pretty [&>p]:mt-3">
        <div className="">
          <span className="flex flex-col-reverse">
            <h2 className="text-3xl font-serif capitalize">
              Learning to Touch Type
            </h2>
            <p className="text-xs text-primary-600 font-mono uppercase tracking-wide">
              Case Study
            </p>
          </span>
          <p className="leading-7 tracking-wide">
            The marker template isn't just for writing novels or business plans.
            It's a Goal Architecture. Let's look at how a user might use the
            "Commitment & Completion" section to master touch typing.
          </p>
        </div>
        <div className="overflow-hidden rounded-r-lg border-l-2 bg-gray-200 dark:bg-gray-80000/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10 mt-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl font-serif">The Brainstorming Dump</h3>
            <p className="text-sm">What do I need to start?</p>
            <ul className="list-disc list-inside ml-6 mt-3">
              <li className="">
                Find a free online course (Keybr or TypingClub).
              </li>
              <li>
                Schedule 15 minutes every morning before the house wakes up.
              </li>
              <li className="">
                Print out a keyboard layout map so I don't look at my hands.
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden rounded-r-lg border-l-2 bg-gray-200 dark:bg-gray-80000/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10 mt-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl font-serif">Commitment & Completion</h3>
            <p className="text-sm">Defining the win state..</p>
            <ul className="list-disc list-inside ml-6 mt-3">
              <li>GOAL: 60 Words Per Minute with 98% Accuracy.</li>
              <li>DEADLINE: 30 Days from today.</li>
              <li>REWARD: A new mechanical keyboard for the office.</li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden rounded-r-lg border-l-2 bg-gray-200 dark:bg-gray-80000/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10 mt-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl font-serif">Reflection & Lessons</h3>
            <p className="text-sm">What did I learn mid-journey?</p>
            <p className="mt-6">
              "Day 12: I realized my posture was causing wrist fatigue. I've
              added a note to the 'Where Will It Be Located?' section of my
              WordDock to adjust my chair height."
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[80ch] mx-auto">
        <h2 className="text-3xl font-serif capitalize">
          Frequently Asked Questions
        </h2>
        {faq.map((question) => {
          return (
            <div
              key={question.id}
              className="border border-black/10 mt-6 rounded-xl"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-serif capitalize font-medium">
                  {question.title}
                </h3>
                <p className="text-sm text-pretty tracking-wide mt-1.5 text-gray-800">
                  {question.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
