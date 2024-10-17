import React from "react";
import Image from "next/image";
import Link from "next/link";
type GreatestOutDoorProps = {
  img: string;
  title: string;
  descreption: string;
  linkText: string;
};

export default function GreatestOutdoors({
  img,
  title,
  descreption,
  linkText,
}: GreatestOutDoorProps) {
  return (
    <div className="container relative mb-3">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          alt="Geatest Outdoors-Img"
          className="rounded-2xl -z-10 object-cover"
        />
      </div>
      <div className="absolute top-32 left-12 ">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="p-4">{descreption}</p>
        <Link
          href="/"
          className="text-sm px-4 py-2 block w-fit rounded-lg mt-5 text-white bg-gray-900"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
