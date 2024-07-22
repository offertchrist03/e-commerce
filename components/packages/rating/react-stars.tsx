"use client";

import { rateText } from "@/utils/constant";
import {
  createArrayNumber,
  lastStrLength,
  stringFuse,
} from "@/utils/functions";
import { Star, StarHalf } from "lucide-react";
import React, { useState } from "react";

export const TwoStar = ({
  size = 45,
  index,
  number,
  color,
  rate,
  onHoverClassName,
  changeRate,
}: {
  size?: number;
  index: number;
  number: number;
  color: string;
  rate: number;
  onHoverClassName?: string;
  changeRate?: (n: number) => void;
}) => {
  const left = index + number;
  const right = index + number + 1;

  const handleRate = (n: number) => {
    if (!changeRate) return;

    changeRate(n);
  };

  return (
    <span
      className={stringFuse(
        "w-10 h-10 flex-center overflow-hidden ",
        onHoverClassName || "",
      )}
    >
      <span
        className="w-1/2 h-full flex-center overflow-hidden "
        onMouseOver={() => handleRate(left)}
      >
        <StarHalf
          className="translate-x-1/2 "
          fill={rate >= left ? color : "#00000000"}
          size={size}
          strokeWidth={1}
        />
      </span>

      <span
        className="w-1/2 h-full flex-center overflow-hidden mirror "
        onMouseOver={() => handleRate(right)}
      >
        <StarHalf
          className="translate-x-1/2 "
          fill={rate >= right ? color : "#00000000"}
          size={size}
          strokeWidth={1}
        />
      </span>
    </span>
  );
};

export const ReadRatedComponent = ({
  rate,
  color = "rgb(250 204 21)",
}: {
  rate: number;
  color?: string;
}) => {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full h-fit text-black flex-center ">
        {createArrayNumber(5).map((number) => (
          <TwoStar
            index={number}
            number={number + 1}
            key={number}
            color={color}
            rate={rate}
          ></TwoStar>
        ))}
      </div>

      {/* <h6 className="w-full h-fit flex-center ">
        {rate > 0 ? rateText[rate - 1] : "aucun avis"}
      </h6> */}
    </div>
  );
};

export const ReadRatedComponent2 = ({
  rate,
  raters = 0,
  color = "rgb(250 204 21)",
}: {
  rate: number;
  raters?: number;
  color?: string;
}) => {
  return (
    <div className="flex gap-1 ">
      <span className="">
        <Star size={20} strokeWidth={0.5} fill={color} />
      </span>
      <span className="font-semibold ">{rate}</span>

      {raters > 0 ? (
        <span className="w-fit h-fit ml-1 block ">{`( ${lastStrLength(
          raters,
          2,
        )} avis )`}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export const RatingComponent = ({
  color = "rgb(250 204 21)",
}: {
  color?: string;
}) => {
  const [rate, setRate] = useState(0);

  const changeRate = (n: number) => {
    if (rate === n) return;

    setRate(n);
  };

  return (
    <div className="w-full h-fit flex flex-col">
      <div
        onMouseLeave={() => {
          setRate(0);
        }}
        className="w-full h-fit text-black flex-center "
      >
        {createArrayNumber(5).map((number) => (
          <TwoStar
            onHoverClassName="hover:scale-110 "
            index={number}
            number={number + 1}
            key={number}
            color={color}
            rate={rate}
            changeRate={changeRate}
          ></TwoStar>
        ))}
      </div>

      <h6 className="w-full h-fit flex-center uppercase font-semibold text-sm ">
        {rate > 0 ? rateText[rate - 1] : "donnez votre avis"}
      </h6>
    </div>
  );
};
