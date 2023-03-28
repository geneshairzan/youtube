import UI from "@component/gip-ui";
import React, { useState, useEffect } from "react";
import h from "@component/gip-helper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const raw = [
  { id: 1, item: "sendok", qty: 10, unitprice: 10000, colorId: 1 },
  { id: 1, item: "meja", qty: 5, unitprice: 50000, colorId: 1 },
  { id: 1, item: "sendok", qty: 10, unitprice: 12000, colorId: 1 },
  { id: 1, item: "piring", qty: 15, unitprice: 10000, colorId: 1 },
  { id: 1, item: "piring", qty: 10, unitprice: 15000, colorId: 2 },
  { id: 1, item: "sendok", qty: 20, unitprice: 10000, colorId: 3 },
];

const color = [
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
];

function getSum(datainput) {
  return datainput.reduce((a, b) => a + b.qty * b.unitprice, 0);
}

export default function App(props) {
  const [sort, setsort] = useState({
    by: "",
    asc: true,
  });

  function handleSort(whichBy) {
    setsort({
      by: whichBy,
      asc: sort.by == whichBy ? !sort.asc : true,
    });
  }

  function doSort(a, b) {
    let temp;
    if (sort.by == "total") temp = a.qty * a.unitprice < b.qty * b.unitprice;
    else {
      temp = a[sort.by] < b[sort.by];
    }
    return temp ? (sort.asc ? -1 : 1) : !sort.asc ? -1 : 1;

    // if (sort.by == "name") temp = a.item < b.item;
    // if (sort.by == "color") temp = a.colorId < b.colorId;

    // if (sort.by == "name") {
    //   return a.item < b.item ? (sort.asc ? -1 : 1) : !sort.asc ? -1 : 1;
    //   // if (sort.asc) return a.item < b.item ? -1 : 1;
    //   // if (!sort.asc) return a.item < b.item ? 1 : -1;
    // }
    // if (sort.by == "total") {
    //   if (sort.asc) return a.qty * a.unitprice < b.qty * b.unitprice ? -1 : 1;
    //   if (!sort.asc) return a.qty * a.unitprice < b.qty * b.unitprice ? 1 : -1;
    // }
    // if (sort.by == "color") {
    //   if (sort.asc) return a.colorId < b.colorId ? -1 : 1;
    //   if (!sort.asc) return a.colorId < b.colorId ? 1 : -1;
    // }
  }

  return (
    <UI.Stack>
      <UI.Row my={2}>
        <UI.Col variant="body1" width="30%" bold px={2}>
          <Header label={"name"} target={"item"} sort={sort} onClick={handleSort} />
        </UI.Col>
        <UI.Col variant="body1" width="30%" bold px={2}>
          <Header label={"total"} target={"total"} sort={sort} onClick={handleSort} />
        </UI.Col>
        <UI.Col variant="body1" bold px={2} flexGrow={1}>
          <Header label={"color"} target={"colorId"} sort={sort} onClick={handleSort} />
        </UI.Col>
      </UI.Row>
      <UI.Divider />
      <UI.Col spacing={1}>
        {raw.sort(doSort).map((d) => (
          <UI.Row>
            <UI.Text variant="body1" width="30%" px={2}>
              {d.item}
            </UI.Text>
            <UI.Text variant="body1" width="30%" px={2}>
              {h.curr.format(d.qty * d.unitprice)}
            </UI.Text>
            <UI.Text variant="body1" px={2}>
              {color.find((dx) => dx.id == d.colorId)?.name}
            </UI.Text>
          </UI.Row>
        ))}
      </UI.Col>
      <UI.Col>
        {/* a : sum/total/compute  */}
        {/* b : curent  */}
        <UI.Text variant="body1" px={2} bold>
          Total : {h.curr.format(getSum(raw))}
        </UI.Text>
        <UI.Text variant="body1" width="30%" px={2} bold>
          avg : {h.curr.format(getSum(raw) / raw.length)}
        </UI.Text>
      </UI.Col>
    </UI.Stack>
  );
}

function Header({ label, sort, onClick, target }) {
  return (
    <UI.Button variant="text" onClick={() => onClick(target)} color={sort.by == target ? "secondary" : "primary"}>
      <UI.Row justifyContent="space-between" width="100%">
        <UI.Text variant="body1">{label}</UI.Text>
        {sort.by == target && (
          <UI.Text variant="body1">{sort.asc ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</UI.Text>
        )}
      </UI.Row>
    </UI.Button>
  );
}
