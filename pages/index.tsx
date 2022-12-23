import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Appbar />
      <main className="space-y-16 mt-16">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="">Headline 1</h1>
          <p className=""></p>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="">Headline 2</h2>
          <p className=""></p>
        </section>
        <section className="bg-blue-500">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h3 className="">Headline 3</h3>
            <p className=""></p>
          </div>
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
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h6 className="">Headline 6</h6>
            <p className=""></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
