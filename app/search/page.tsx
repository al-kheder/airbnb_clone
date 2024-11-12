import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ListingCard from "../components/ListingCard";
import { getProperties } from "../utils/api";
import { SearchResults } from "../types/app";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: number;
};

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formattedSatrtDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formattedSatrtDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formattedSatrtDate} - ${formatedEndDate} `;
  const filters = [
    "Cancellation Flexibilty",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filter",
  ];
  const fakeDataFromFlask: SearchResults = await getProperties();
  console.log("fakeDataFromFlask", fakeDataFromFlask);

  return (
    <>
      <Header
        placeholder={`${location}| ${range} | ${numOfGuests}${
          numOfGuests > 1 ? "gests" : "guest"
        } `}
      />
      <main>
        <section className="py-5 ">
          <div className="container">
            <p className="text-xs">
              300 + Stays - {range} - for {numOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
              {filters.map((filter) => (
                <button key={filter} type="button" className="filter-btn">
                  {filter}
                </button>
              ))}
            </div>
            <div>
              {fakeDataFromFlask.map((listing) => (
                <ListingCard
                  key={listing.id}
                  imageUrl={listing.image_url}
                  location={listing.location}
                  name={listing.name}
                  price_per_night={listing.price_per_night}
                  priceCurrency={listing.priceCurrency}
                  description={listing.description}
                  star={listing.star}
                  total={listing.total}
                  id={0}
                />
              ))}
            </div>
            <div >
             
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
