import { useState, useEffect } from "react";
import moment from "moment";
import { helper as h } from "gh-usereact";
import { hook } from "gh-usereact";
import "./App.css";

export default function App() {
  let datax = hook.usearray();

  useEffect(() => {
    datax.set([{ name: "joni" }, { name: "budi" }, { name: "ani" }]);
  }, []);

  return (
    <div>
      {datax.data.map((d) => (
        <p key={d._ix}>{d?.name}</p>
      ))}
      <p>===============================</p>
      <p>{h.date.today}</p>
      <p>{h.date.todayMonth}</p>
      <p>{h.date.todayYear}</p>
      <p>{h.date.format(h.date.today, "DD MMM y")}</p>
      <p>{h.date.formatTime(h.date.today)}</p>
      <p>{h.date.datediff("1 jan 2023")}</p>
      <p>{h.date.yrdiff("1 jan 2022")}</p>
      <p>is today ? {h.date.isToday("2 oct 2023") ? "yes" : "no"}</p>
      <p>{h.date.isThisMonth("10 10 2023") ? "yes" : "no"}</p>
      <p>{h.date.isThisYear("1 oct 2022") ? "yes" : "no"}</p>
    </div>
  );
}
