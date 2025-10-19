export default function App() {
  return (
    <main className="">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
        <div className="px-4 py-5 sm:p-6">
          {/* Content goes here */}
          <div className="">
            <h1 className="">ClearNote.</h1>
            <p className="">
              A minimal note tool for your browser. When you click the icon, a
              small pop-up appears for jotting down thoughts or reminders before
              you write.
            </p>
          </div>
          <div className="mt-2">
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              defaultValue={""}
            />
          </div>
          <p>
            Note * this extension reset every 24 hours, helping you stay focused
            and intentional without clutter or long-term storage
          </p>
        </div>
      </div>
    </main>
  );
}
