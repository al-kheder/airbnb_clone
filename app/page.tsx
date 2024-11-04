import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Header from "./components/header/Header";
import Live from "./components/Live";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors
          img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530961.jpg?t=st=1728335433~exp=1728339033~hmac=de99dd211c32629278d6f2b050fefb97ad461b0f553ac0891bc9b3353d70db6c&w=2000"
          title="The greatest Outdoors"
          descreption="Wishlist curated by Airbnb"
          linkText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
