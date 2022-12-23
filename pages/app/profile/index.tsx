import Head from "next/head";
import React from "react";
// 
import Navbar from "../../../components/app/Navbar"

export default function Profile() {
  return (
    <>
      <Head>
        <title>Marker - Profile</title>
      </Head>
      <Navbar />
      <main className="h-screen">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4">
          <h1 className="">Profile</h1>
        </section>
      </main>
    </>
  );
}
