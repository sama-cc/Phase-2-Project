import React from "react";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";
import MenuItem from "@mui/material/MenuItem";

function Teams({
  characters,
  handleName,
  handleAetherLumine,
  teams,
  setTeams,
}) {

  console.log("Teams was called")

  const charOptions = characters.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

  return (
    <div className="team-container">
      <TeamForm
        characters={characters}
        charOptions={charOptions}
        teams={teams}
        setTeams={setTeams}
      />
      <TeamList
        characters={characters}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        teams={teams}
        setTeams={setTeams}
        charOptions={charOptions}
      />
    </div>
  );
}

export default Teams;
