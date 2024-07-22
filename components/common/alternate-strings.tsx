"use client";

import { stringFuse } from "@/utils/functions";
import React, { useEffect, useState } from "react";

export function SimpleAlternation({
  classes,
  items,
  interval = 5000,
}: {
  classes?: string;
  items: React.ReactNode[];
  interval?: number;
}) {
  const [item, setItem] = useState<React.ReactNode>("");

  useEffect(() => {
    setItem(items[0]);
  }, []);

  const rendering = () => {
    let number = 0;

    setInterval(() => {
      number + 1 <= items.length - 1 ? number++ : (number = 0);

      setItem(items[number]);
    }, interval);
  };

  useEffect(() => {
    if (items.length > 1) {
      rendering();
    }
  }, []);

  return <span className={stringFuse(classes || "")}>{item}</span>;
}
