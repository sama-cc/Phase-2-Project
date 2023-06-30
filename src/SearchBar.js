import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBar({
  Item,
  charsToDisplay,
  setCharsToDisplay,
  characters,
}) {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    setCharsToDisplay(
      charsToDisplay.filter(
        (char) => char.name.toLowerCase() === searchText.toLowerCase()
      )
    );
  }
  return (
    <Grid sx={{ m: 4 }} item xs={12}>
      <Item elevation={8}>
        <TextField
          id="name-search"
          label="Name Search"
          size="small"
          onFocus={() => setSearchText("")}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          name="name"
        />
        <Button
          sx={{ m: 1 }}
          variant="contained"
          onClick={handleSearch}
          size="small"
        >
          Search
        </Button>
        <Button
          sx={{ m: 0 }}
          variant="contained"
          onClick={() => setCharsToDisplay(characters)}
          size="small"
        >
          Reset
        </Button>
      </Item>
    </Grid>
  );
}
