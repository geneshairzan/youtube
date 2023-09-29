import React, { useState, useEffect } from "react";

export default function App(source = "https://dummyjson.com/products", target = "products") {
  const [data, setdata] = useState([]);

  async function refetch(src, target) {
    let res = await fetch(src);
    let raw = await res.json();
    setdata(raw?.[target]);
  }

  useEffect(() => {
    refetch(source, target);
  }, []);

  return {
    data,
    refetch,
  };
}
