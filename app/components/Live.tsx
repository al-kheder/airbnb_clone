import React from "react";
import { getLiveDate } from "../utils/api";
import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading";

async function Live() {
  const liveData = await getLiveDate();
  console.log("live data", liveData);
  return (
    <section className="pt-6">
      <div className="mx-8"> <MainHeading title='Live Anywhere' /> 
      <div className="m-8">
        <div className="flex space-x-3 overflow-scroll no-scrollbar">
          {liveData.map((item) => (
            <LiveCard key={item.imageUrl} items={item} />
          ))}
        </div>
      </div></div>
    </section>
  );
}

export default Live;
