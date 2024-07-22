import React from "react";

function Home() {
  return (
    <ul className="w-full h-96 grid grid-cols-4 gap-3 grid-rows-2 grid-flow-col ">
      <li className="col-span-1 w-full h-full rounded-md p-3 bg-sky-400"></li>
      <li className="col-span-1 w-full h-full rounded-md p-3 bg-red-500"></li>
      <li className="col-span-2 row-span-full w-full h-full rounded-md p-3 bg-theme "></li>
      <li className="col-span-1 w-full h-full rounded-md p-3 bg-indigo-500"></li>
      <li className="col-span-1 w-full h-full rounded-md p-3 bg-yellow-400"></li>
    </ul>
  );
}

export default Home;
