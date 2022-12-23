import Head from "next/head";
import Link from "next/link";
// End of Next.js
import Appbar from "../components/Header";
import Footer from "../components/Footer";
import {HiOutlineHeart} from "react-icons/hi"

export default function Home() {
  return (
    <>
      <Head>
        <title>Marker</title>
      </Head>
      <Appbar />
      <main className="space-y-16 mt-16">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl mx-auto max-w-3xl capitalize leading-10">
            Accounting made simple for small businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center mx-auto max-w-prose">
            Discover and build your collection of online resources you use for
            your industry. Find new ones by searching what other people use to
            help them get ahead inside their industry or to help make their
            day-to-day lives easiers.
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <Link href="/login" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"> Get started</Link>
            <Link href="/app" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"> Live demo</Link>
          </div>
          <div className="w-full h-[500px] bg-gray-300 rounded-xl mt-16"></div>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-blue-500 rounded-lg py-6 px-8">
              <HiOutlineHeart size="2rem" className="mb-4 text-blue-500" />
              <h2 className="text-lg font-semibold capitalize">The quick brown fox jumps over the.</h2>
              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, illum reiciendis distinctio hic at suscipit praesentium temporibus illo culpa nam explicabo veniam, nemo placeat!</p>
            </div>
            {/* End of Grid Item 1 */}
            <div className="border border-blue-500 rounded-lg py-6 px-8">
              <HiOutlineHeart size="2rem" className="mb-4 text-blue-500" />
              <h2 className="text-lg font-semibold capitalize">The quick brown fox jumps over the.</h2>
              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, illum reiciendis distinctio hic at suscipit praesentium temporibus illo culpa nam explicabo veniam, nemo placeat!</p>
            </div>
            {/* End of Grid Item 2 */}
            <div className="border border-blue-500 rounded-lg py-6 px-8">
              <HiOutlineHeart size="2rem" className="mb-4 text-blue-500" />
              <h2 className="text-lg font-semibold capitalize">The quick brown fox jumps over the.</h2>
              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, illum reiciendis distinctio hic at suscipit praesentium temporibus illo culpa nam explicabo veniam, nemo placeat!</p>
            </div>
            {/* End of Grid Item 3 */}
          </div>
        </section>
        <section className="bg-blue-500">
          <Example />
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h4 className="">Headline 4</h4>
          <p className=""></p>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h5 className="">Headline 5</h5>
          <p className=""></p>
        </section>
        <section className="bg-gray-500">
          <Example />
        </section>
      </main>
      <Footer />
    </>
  );
}
export function Example() {
  return (
    <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block text-indigo-100">
          Start your free trial today.
        </span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-800"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
