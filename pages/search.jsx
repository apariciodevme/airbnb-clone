import Title from "@/components/Title";

function Search() {
  return (
    <div className="h-screen">
      <main className="flex">
        <section>
          <p className="text-xs ">300+ Stays</p>
          <h1 className="text-3xl font-semibold">Stays in London</h1>

          <div className="">
            <p className="scaledButton">Cancelation flexibility</p>
            <p className="scaledButton">Type of place</p>
            <p className="scaledButton">Price</p>
            <p className="scaledButton">Rooms and beds</p>
            <p className="scaledButton">More filters</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;
