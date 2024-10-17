import React from "react";
import { ExplorItem } from "../types/app";
import Image from "next/image";

type ExplorCardType = ExplorItem;

function ExploreCard({ items }) {
  const { id, name, imageUrl, price, priceCurrency }: ExplorCardType = items;

  return (
    <div className="flex items-center gap-2 m-2 mt-5 space-x-4 cursor-pointer hover:scale-105 transition transform duration-200 ease-in-out ">
      <div className="relative w-16 h-16">
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div>
        <h2>{name}</h2>
        <div className="flex gap-1">
          <h3>{price}</h3>
          <p>{priceCurrency}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
