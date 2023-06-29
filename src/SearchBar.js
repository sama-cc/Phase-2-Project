import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function SearchBar({ searchText, setSearchText, Item }) {
  function handleSearchName(e) {
    setSearchText(e.target.value);
  }

  return (
    <Grid sx={{ m: 4 }} item xs={12}>
      <Item elevation={8}>
        <TextField
          id="search-name"
          label="Search Name"
          size="small"
          onChange={(e) => handleSearchName(e)}
          value={searchText}
          name="name"
        />
      </Item>
    </Grid>
  );
}
