import React from "react";
import ExploreCard from "./ExploreCard";
import { getExplore } from "../utils/api";
import { ExplorData } from "../types/app";
import MainHeading from "./MainHeading";
async function Explore() {
  const exploreData: ExplorData = await getExplore();

  return (
    <section className="pt-6">
      <div className="mx-8">
        <MainHeading title='Explore Nearby'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <ExploreCard key={item.id} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
