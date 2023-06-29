import React from "react";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(() => ({
  backgroundColor: "lightskyblue",
  padding: 3,
  textAlign: "center",
  color: "white",
}));

function Teams({
  characters,
  handleName,
  handleAetherLumine,
  teams,
  setTeams,
}) {
  const charOptions = characters.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

  function getCharData(char) {
    const charData = characters.find((c) => c.name === char);
    return (
      <>
        {charData === undefined ? (
          "No character selected"
        ) : (
          <>
            <p>{charData.vision}</p>
            <p>{charData.weapon}</p>
          </>
        )}
      </>
    );
  }

  return (
    <div className="team-container">
      <TeamForm
        characters={characters}
        charOptions={charOptions}
        teams={teams}
        setTeams={setTeams}
        Item={Item}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        getCharData={getCharData}
      />
      <TeamList
        characters={characters}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        teams={teams}
        setTeams={setTeams}
        charOptions={charOptions}
        Item={Item}
        getCharData={getCharData}
      />
    </div>
  );
}

export default Teams;
