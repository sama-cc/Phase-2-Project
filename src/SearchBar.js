import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function SearchBar({ Item, setCharsToDisplay, characters }) {
  const [searchText, setSearchText] = useState("");
  const [visionSelect, setVisionSelect] = useState("");
  const [weaponSelect, setWeaponSelect] = useState("");
  const [raritySelect, setRaritySelect] = useState("");

  function handleSearch() {
    setCharsToDisplay(
      characters.filter((char) =>
        char.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  function enterSearch(e) {
    if (e.keyCode === 13) {
      return handleSearch();
    }
  }

  function handleFilter() {
    if (visionSelect !== "" && weaponSelect === "" && raritySelect === "") {
      return setCharsToDisplay(
        characters.filter(
          (char) => char.vision.toLowerCase() === visionSelect.toLowerCase()
        )
      );
    } else if (
      visionSelect === "" &&
      weaponSelect !== "" &&
      raritySelect === ""
    ) {
      return setCharsToDisplay(
        characters.filter(
          (char) => char.weapon.toLowerCase() === weaponSelect.toLowerCase()
        )
      );
    } else if (
      visionSelect === "" &&
      weaponSelect === "" &&
      raritySelect !== ""
    ) {
      return setCharsToDisplay(
        characters.filter(
          (char) => char.rarity.toLowerCase() === raritySelect.toLowerCase()
        )
      );
    } else if (
      visionSelect !== "" &&
      weaponSelect !== "" &&
      raritySelect === ""
    ) {
      setCharsToDisplay(
        characters
          .filter(
            (char) => char.vision.toLowerCase() === visionSelect.toLowerCase()
          )
          .filter(
            (char) => char.weapon.toLowerCase() === weaponSelect.toLowerCase()
          )
      );
    } else if (
      visionSelect !== "" &&
      weaponSelect === "" &&
      raritySelect !== ""
    ) {
      setCharsToDisplay(
        characters
          .filter(
            (char) => char.vision.toLowerCase() === visionSelect.toLowerCase()
          )
          .filter(
            (char) => char.rarity.toLowerCase() === raritySelect.toLowerCase()
          )
      );
    } else if (
      visionSelect === "" &&
      weaponSelect !== "" &&
      raritySelect !== ""
    ) {
      setCharsToDisplay(
        characters
          .filter(
            (char) => char.weapon.toLowerCase() === weaponSelect.toLowerCase()
          )
          .filter(
            (char) => char.rarity.toLowerCase() === raritySelect.toLowerCase()
          )
      );
    } else if (
      visionSelect !== "" &&
      weaponSelect !== "" &&
      raritySelect !== ""
    ) {
      setCharsToDisplay(
        characters
          .filter(
            (char) => char.vision.toLowerCase() === visionSelect.toLowerCase()
          )
          .filter(
            (char) => char.weapon.toLowerCase() === weaponSelect.toLowerCase()
          )
          .filter(
            (char) => char.rarity.toLowerCase() === raritySelect.toLowerCase()
          )
      );
    }
  }

  function handleReset() {
    setSearchText("");
    setVisionSelect("");
    setWeaponSelect("");
    setRaritySelect("");
    setCharsToDisplay(characters);
  }

  return (
    <Box component="form" autoComplete="off">
      <Grid sx={{ m: 4 }} item xs={12}>
        <Item elevation={8}>
          <TextField
            id="name-search"
            label="Name Search"
            size="small"
            onFocus={() => setSearchText("")}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => enterSearch(e)}
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
          <TextField
            id="vision-select"
            select
            label="Vision"
            size="small"
            name="vision-select"
            onChange={(e) => setVisionSelect(e.target.value)}
            value={visionSelect}
            style={{ width: 100 }}
          >
            <MenuItem value="Anemo">Anemo</MenuItem>
            <MenuItem value="Cryo">Cryo</MenuItem>
            <MenuItem value="Dendro">Dendro</MenuItem>
            <MenuItem value="Electro">Electro</MenuItem>
            <MenuItem value="Geo">Geo</MenuItem>
            <MenuItem value="Hydro">Hydro</MenuItem>
            <MenuItem value="Pyro">Pyro</MenuItem>
          </TextField>
          <TextField
            id="weapon-select"
            select
            label="Weapon"
            size="small"
            name="weapon-select"
            onChange={(e) => setWeaponSelect(e.target.value)}
            value={weaponSelect}
            style={{ width: 100 }}
          >
            <MenuItem value="Bow">Bow</MenuItem>
            <MenuItem value="Catalyst">Catalyst</MenuItem>
            <MenuItem value="Claymore">Claymore</MenuItem>
            <MenuItem value="Polearm">Polearm</MenuItem>
            <MenuItem value="Sword">Sword</MenuItem>
          </TextField>
          <TextField
            id="rarity-select"
            select
            label="Rarity"
            size="small"
            name="rarity-select"
            onChange={(e) => setRaritySelect(e.target.value)}
            value={raritySelect}
            style={{ width: 100 }}
          >
            <MenuItem value="4_Star">4 Star</MenuItem>
            <MenuItem value="5_Star">5 Star</MenuItem>
          </TextField>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={handleFilter}
            size="small"
          >
            Filter
          </Button>
          <Button
            sx={{ m: 0 }}
            variant="contained"
            onClick={handleReset}
            size="small"
          >
            Reset
          </Button>
        </Item>
      </Grid>
    </Box>
  );
}
