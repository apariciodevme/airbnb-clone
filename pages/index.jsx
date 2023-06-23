import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";
import SmallCard from "@/components/SmallCard";
import Title from "@/components/Title";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb </title>
        <meta name="description" content="Airbnb clone webapp" key="desc" />
      </Head>
      <div className="min-h-screen">
        <Banner />
        <main className="px-8 mx-auto overflow-x-hidden max-w-7xl sm:px-16">
          <section className="pt-6">
            <Title text={"Explore Nearby"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ img, location, distance }) => (
                <SmallCard
                  key={location}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </div>
          </section>

          <section>
            <Title text={"Live Anywhere"} />
            <div className="flex p-5 -ml-5 space-x-3 overflow-scroll rounded-xl scrollbar-hide">
              {cardsData?.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
          </section>

          <LargeCard 
          img={"https://links.papareact.com/4cj"}
          title={'The Greatest Outdoors'}
          description={'Wishlists curated by Airbnb.'}
          buttonText={'Get Inspired'}
          />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
