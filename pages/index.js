import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb </title>
        <meta
          name="description"
          content="Airbnb clone webapp"
          key="desc"
        />
      </Head>
      <div className="min-h-screen">
        <Banner />
        <main className="px-8 mx-auto max-w-7xl sm:px-16">
          <section className="pt-6">
            <h2 className="pb-5 text-4xl font-semibold ">Explore Nearby</h2>
          </section>
        </main>
      </div>
    </>
  );
}
