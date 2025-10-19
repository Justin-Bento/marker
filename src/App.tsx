export default function App() {
  return (
    <main className="">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
        <div className="px-4 py-5 sm:p-6">
          {/* Content goes here */}
          <div className="">
            <h1 className="">Lorem, ipsum dolor.</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              impedit placeat odit eaque. Facilis id quam error quaerat soluta.
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
        </div>
      </div>
    </main>
  );
}
