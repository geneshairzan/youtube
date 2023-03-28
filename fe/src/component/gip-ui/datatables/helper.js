export function search(e, search) {
  return Object.keys(e).some(
    (k) =>
      typeof e[k] === "string" &&
      e[k].toLowerCase().includes(search.toLowerCase())
  );
}

export function order(a, b, order) {
  if (order.by == null) return;
  if (dataFind(a, order.by) < dataFind(b, order.by)) {
    return order.asc ? -1 : 1;
  }
  if (dataFind(a, order.by) > dataFind(b, order.by)) {
    return order.asc ? 1 : -1;
  }
  return 0;
}

function dataFind(d, dt) {
  if (dt.includes(".")) {
    dt.split(".").forEach((e) => {
      d[e] ? (d = d[e]) : (d = "");
    });
    return d;
  } else return d[dt];
}
