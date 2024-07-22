import React from "react";
import ContainerComponent from "../common/ContainerComponent";
import { dataFooters } from "@/utils/data-footer";
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <div className="w-full mt-5 py-5 relative bg-before before:bg-theme ">
      <ContainerComponent>
        <ul className="w-full h-fit grid grid-cols-3 gap-5 ">
          <li className="col-span-full py-3 flex-center gap-3 ">
            <span className="w-10 h-10 rounded-full bg-blue-600 flex-center ">
              fb
            </span>
          </li>

          {dataFooters.map((dataFooter) => (
            <li className="text-center" key={dataFooter.head}>
              <h6 className="uppercase font-semibold text-theme mb-3 ">
                {dataFooter.head}
              </h6>

              <div className="flex flex-col gap-1">
                {dataFooter.items.map((item) => (
                  <span
                    className="cursor-pointer hover:underline decoration-dashed "
                    key={item.label}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </li>
          ))}

          <li className="col-span-full ">
            <h6 className="text-center uppercase font-semibold text-theme mb-3 ">
              nos partenaires:
            </h6>

            <ul className="w-full h-fit flex-center gap-3 flex-wrap">
              <li className="w-20 aspect-video bg-yellow-400 flex-center ">
                TELMA
              </li>
              <li className="w-20 aspect-video bg-orange-500 flex-center ">
                ORANGE
              </li>
              <li className="w-20 aspect-video bg-red-500 flex-center ">
                AIRTEL
              </li>
            </ul>
          </li>

          <li className="col-span-full py-3 flex-center gap-1 text-xs font-semibold uppercase italic ">
            <span className="">
              <Copyright size={14} strokeWidth={3} />
            </span>
            <span className="">2024</span>
            <span className="">.</span>
            <span className="">enterprise</span>
          </li>
        </ul>
      </ContainerComponent>
    </div>
  );
}

export default Footer;
