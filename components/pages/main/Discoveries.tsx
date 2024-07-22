import React from "react";
import DiscoveryList from "./DiscoveryList";
import { dataTestArticles } from "@/test/data-test";
import { Hourglass, Ticket } from "lucide-react";

function Discoveries() {
  const dataEarly = dataTestArticles.filter(
    (data) => !((data.discount || 0) > 0),
  );
  const dataPromotions = dataTestArticles.filter(
    (data) => (data.discount || 0) > 0,
  );
  return (
    <>
      <DiscoveryList
        color="rgb(22 163 74)"
        title={
          <span className="flex-center gap-2 text-green-600 ">
            <span className="">
              <Hourglass size={20} strokeWidth={3} />
            </span>
            <span className="">{`nouveaute`}</span>
          </span>
        }
        datas={dataEarly}
      ></DiscoveryList>

      <DiscoveryList
        color="rgb(2 132 199)"
        title={
          <span className="flex-center gap-2 text-sky-600 ">
            <span className="">
              <Ticket size={20} strokeWidth={3} />
            </span>
            <span className="">{`promotion`}</span>
          </span>
        }
        datas={dataPromotions}
      ></DiscoveryList>
    </>
  );
}

export default Discoveries;
