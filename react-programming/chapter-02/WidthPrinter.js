import React, { useEffect, useState } from "react";

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    console.log("useEffect1");
    return () => {
      window.removeEventListener("resize", onResize);
      console.log("useEffect2");
    };
  });
  return <div>{`Width is ${width}`}</div>;
}
