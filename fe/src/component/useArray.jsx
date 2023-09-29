import React, { useState, useEffect } from "react";

export default function App() {
  const [data, set] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState({
    by: "",
    asc: true,
  });

  function pop(ix) {
    let index = data.findIndex((d) => d.ix == ix);
    let temp = data;
    temp.splice(index, 1);
    set([...temp]);
  }

  function push(input) {
    set([...data, { ...input, ix: data.length + 1 }]);
  }

  function handleInput(ix, field, value) {
    let index = data.findIndex((d) => d.ix == ix);
    let temp = data;
    temp[index][field] = value;
    set([...temp]);
  }

  function doSort(a, b) {
    if (!sort.by) return;

    if (sort.asc) {
      return a[sort.by]?.toLowerCase() > b[sort.by]?.toLowerCase() ? 1 : -1;
    } else {
      return a[sort.by] < b[sort.by] ? 1 : -1;
    }
  }

  function handleSort(input) {
    setSort((prev) => ({
      by: input,
      asc: sort?.by == input ? !prev.asc : true,
    }));
  }

  function qFilter(e) {
    return Object.keys(e).some((k) => typeof e[k] === "string" && e[k].toLowerCase().includes(q.toLowerCase()));
  }

  return {
    data: data?.sort(doSort)?.filter(qFilter),
    set: (raw) => set([...raw.map((d, ix) => ({ ...d, ix: d.ix || ix }))]),
    pop,
    push,
    handleInput,
    q,
    setQ,
    sort,
    handleSort,
  };
}
