import Head from "next/head";
import Navbar from "../../components/app/Navbar";

export default function settings() {
  return (
    <>
      <Head>
        Marker - settings
      </Head>
      <Navbar />
      <main className="">
        <h1 className="">settings</h1>
      </main>
    </>
  );
}
