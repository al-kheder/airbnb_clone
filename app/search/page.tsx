import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: number;
}

const SearchResult = ({searchParams:{location,startDate,endDate,numOfGuests}}:{searchParams:SearchParams}) => {
console.log(numOfGuests);

let formattedSatrtDate;
let formatedEndDate;
if (startDate && endDate) {
formattedSatrtDate = format(new Date(startDate), "dd MMMM yy");
formatedEndDate = format(new Date(endDate), "dd MMMM yy");
}
const range = `${formattedSatrtDate} - ${formatedEndDate} `;

  return <>
  <Header placeholder={`${location}| ${range} | ${numOfGuests}`}/>
  <main>Hello</main>
  <Footer/>
  </>;
};

export default SearchResult;
