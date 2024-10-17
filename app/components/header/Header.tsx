import Link from "next/link";
import Image from "next/image";
import Searchbar from "@/app/components/header/Searchbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 my-auto">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="logo-img"
            fill
            //objectFit="contain"
            className="object-contain object-left"
          />
        </Link>
        <Searchbar />
        <Navbar/>
      </div>
    </header>
  );
}

export default Header;