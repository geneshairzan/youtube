import React, { useState, useEffect } from "react";
import UI from "@component/gip-ui";

const ep = ["products", "carts"];

export default function App(props) {
  const [filter, setfilter] = useState({
    showMahal: true,
  });
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/${ep[1]}`)
      .then((res) => res.json())
      .then((json) => setdata(json.products.map(datamaper)));
  }, []);

  function datamaper(d) {
    return {
      id: d.id,
      title: d.title,
      isMahal: d.price < 30,
      inStock: d.stock > 100,
      primaryImage: d.images[0],
    };
  }

  function doFilter(d) {
    return filter.showMahal == d.isMahal;
  }

  function handleFilter() {
    setfilter({
      ...filter,
      showMahal: !filter.showMahal,
    });
  }

  return (
    <UI.Col spacing={1}>
      <UI.Row p={2}>
        <UI.Button onClick={handleFilter} color={filter.showMahal ? "primary" : "secondary"}>
          Show {filter.showMahal ? "mahal" : "murah"}
        </UI.Button>
      </UI.Row>
      <UI.Row spacing={2}>
        <UI.Text variant="body1" minWidth={300}>
          TITLE
        </UI.Text>
        <UI.Text variant="body1" bold>
          STATUS HARGA
        </UI.Text>
      </UI.Row>
      <UI.Divider />
      {data.filter(doFilter).map((d) => (
        <UI.Row spacing={2}>
          <UI.Text variant="body1" minWidth={300}>
            {d.title}
          </UI.Text>
          <UI.Text variant="body1" bold>
            {d.isMahal ? "adalah mahal" : "murah"}
          </UI.Text>
        </UI.Row>
      ))}
    </UI.Col>
  );
}
