import Image from "next/image";
import React from "react";

function Home() {
  const images = ["pub-1.jpeg", "pub-2.jpg", "pub-3.jpg"];
  return (
    <ul className="w-full h-48 md:h-80 grid grid-cols-1 gap-5 ">
      <li className="col-span-1 w-full h-full rounded overflow-hidden p-3 relative bg-gradient-to-t from-theme to-theme/80 ">
        <Image
          alt=""
          src={`/uploads/${images[2]}`}
          fill
          className="w-full h-full object-contain object-center"
        ></Image>
      </li>
    </ul>
  );
}

export default Home;
