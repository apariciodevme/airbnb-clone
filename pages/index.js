import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";

export default function Home({ exploreData }) {
  return (
    <>
      <Head>
        <title>Airbnb </title>
        <meta name="description" content="Airbnb clone webapp" key="desc" />
      </Head>
      <div className="min-h-screen">
        <Banner />
        <main className="px-8 mx-auto max-w-7xl sm:px-16">
          <section className="pt-6">
            <h2 className="pb-5 text-4xl font-semibold ">Explore Nearby</h2>

            {exploreData.map((item) => (
              <h1>{item.location}</h1>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
