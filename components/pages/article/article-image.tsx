"use client";

import { stringFuse } from "@/utils/functions";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ArticleImageDetails({ images }: { images: string[] | null }) {
  const [theImage, setTheImage] = useState("");

  useEffect(() => {
    if (images && images.length > 0) {
      setTheImage(images[0]);
    }
  }, []);

  return (
    <div className="w-full relative aspect-[16/10] overflow-hidden rounded-md ">
      <span className="w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-theme ">
        <ImageIcon size={57} strokeWidth={3} />
      </span>

      {theImage && (
        <div className="w-full h-full relative ">
          <Image
            alt={theImage}
            width={605}
            height={605}
            src={`/uploads/${theImage}`}
            className="w-full h-full object-contain object-center "
          ></Image>
        </div>
      )}

      {images && images.length > 1 && (
        <ul className="group w-full h-fit p-3 absolute bottom-0 left-0 flex-center gap-3">
          {images.map((image, imageIdx) => (
            <li
              key={imageIdx + image}
              onClick={() => {
                setTheImage(image);
              }}
              className={stringFuse(
                "h-16 rounded-md overflow-hidden relative aspect-[16/10] cursor-pointer ",
                theImage === image
                  ? "grayscale "
                  : "hover:ring-2 ring-theme/40 ",
              )}
            >
              <Image
                alt={image}
                width={605}
                height={605}
                src={`/uploads/${image}`}
                className="w-full h-full object-cover object-center "
              ></Image>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticleImageDetails;
