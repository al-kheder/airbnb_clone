import React from "react";
import { LiveItem } from "../types/app";
import Image from "next/image";

type LiveCardType = LiveItem;

function LiveCard({ items }) {
  const { name, imageUrl }: LiveCardType = items;
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300  ease-out">
      <div className="relative h-80 w-80">
        <Image src={imageUrl} alt="live Card" fill />
      </div>
      <h3 className="text-xl mt-3">{name}</h3>
    </div>
  );
}

export default LiveCard;
