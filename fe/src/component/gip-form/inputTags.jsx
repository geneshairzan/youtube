import React from "react";
import { TextField, Stack } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

const filter = createFilterOptions();

const defaultvalue = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
];

export default function FreeSoloCreateOption({ initialvalue, value }) {
  const [inputvalue, setinputvalue] = React.useState();
  const [collections, setcollections] = React.useState(
    initialvalue || defaultvalue.map((d) => d.name)
  );

  function handleBlur(e) {
    if (e.target.value.length > 0) {
      let temp = collections;
      temp.push(e.target.value);
      setcollections([...temp]);
      setinputvalue("");
    }
  }

  function deleteChip(toDelete) {
    let temp = collections.filter((d) => d != toDelete);
    setcollections([...temp]);
    return;
  }

  function handleKeyDown(e) {
    if (e.keyCode == 13) {
      e.target.blur();
    }
  }
  React.useEffect(() => {
    value(collections);
  }, [collections]);

  return (
    <Stack
      flexGrow={1}
      direction={"row"}
      border="1px solid"
      borderColor={"divider"}
      p={"4px"}
      borderRadius={2}
      alignItems="center"
      flexWrap={"wrap"}
    >
      {collections.map((d, ix) => (
        <Chip
          size="small"
          key={ix}
          label={d}
          onDelete={() => deleteChip(d)}
          sx={{
            my: "4px",
            mx: "2px",
          }}
        />
      ))}
      <TextField
        value={inputvalue || ""}
        variant="outlined"
        sx={{
          margin: 0,
          input: {
            px: 1,
            py: "2px",
          },
        }}
        onKeyDown={handleKeyDown}
        placeholder="new"
        onChange={(e) => setinputvalue(e.target.value)}
        onBlur={handleBlur}
      />
    </Stack>
  );
}
