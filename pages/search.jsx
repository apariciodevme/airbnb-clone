import InfoCard from "@/components/InfoCard";
import Title from "@/components/Title";
import { format } from "date-fns";
import { useRouter } from "next/router";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, numberGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <main className="flex-grow px-6 pt-14">
        <section>
          <p className="text-sm font-semibold text-gray-500 ">
            300+ Stays - <span className="text-rose-500">{range}</span> - for{" "}
            <span className="text-rose-500">{numberGuests}</span> guests
          </p>
          <h1 className="py-6 mt-2 text-3xl font-semibold">Stays in {location}</h1>
          <div className="inline-flex flex-wrap gap-3 mb-5 space-x-3 text-gray-500 md:flex-nowrap whitespace-nowrap">
            <p className="scaledButton">Cancelation flexibility</p>
            <p className="scaledButton">Type of place</p>
            <p className="scaledButton">Price</p>
            <p className="scaledButton">Rooms and beds</p>
            <p className="scaledButton">More filters</p>
          </div>
          <div className="flex flex-col ">
            {searchResults?.map(
              ({ img, title,  location, description, star, price, total }) => (
                <InfoCard
                  key={location}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  title={title}

                />
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
