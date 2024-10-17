import React from "react";
import Image from "next/image";
import landingpage from "@/public/sunrise.webp";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] ">
      <Image
        src={landingpage}
        alt="landing page image"
        className="object-cover object-left "
        fill
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-bold mb-4">
          Not sure where to go? Perfect.
        </p>
        <button
          type="button"
          className="cursor-pointer text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold"
        >
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
