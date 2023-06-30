import React, { useState, useEffect } from "react";
import CharList from "./CharList";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function CharContainer({
  characters,
  handleName,
  handleAetherLumine,
}) {
  const [charsToDisplay, setCharsToDisplay] = useState(characters);

  useEffect(() => setCharsToDisplay(characters), [characters]);

  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));

  return (
    <>
      <SearchBar
        Item={Item}
        charsToDisplay={charsToDisplay}
        setCharsToDisplay={setCharsToDisplay}
        characters={characters}
      />
      <CharList
        Item={Item}
        charsToDisplay={charsToDisplay}
        characters={characters}
        handleName={handleName}
        handleAetherLumine={handleAetherLumine}
      />
    </>
  );
}
