const named = import.meta.globEager("@/pages/**/[a-z]*.jsx");

function getDefaultName(path) {
  path = path.replace("/", "");
  if (path == "") return "home";

  return path.replaceAll("/", " ");
}

function getGroup(path) {
  let explode = path.split("/").filter((d) => d != "");

  return explode[0] || "home";
}

function groupByKey(array, key) {
  let arr = [];

  array.map((d) => {
    let findIndex = arr.findIndex((dx) => d.group == dx.group);
    if (findIndex < 0)
      arr.push({
        group: d.group,
        child: [d],
      });
    else {
      arr[findIndex].child.push(d);
    }
  });

  return arr;
}

const rawnav = Object.keys(named)
  .map((route) => {
    const path = route
      .replace("../pages", "")
      .replace(/\/src\/pages|index|\.jsx$/g, "")
      .replace(/\[\.{3}.+\]/, "*")
      .replace(/\[(.+)\]/, ":$1");

    const Element = named[route].meta
      ? { ...named[route].meta, group: getGroup(path) }
      : { title: getDefaultName(path), order: 99, group: getGroup(path) };
    return { path, ...Element };
  })
  .sort((a, b) => (a.order > b.order ? 1 : -1))
  .filter((d) => !d.path.includes("_"));

export const nav = groupByKey(rawnav, "group");
