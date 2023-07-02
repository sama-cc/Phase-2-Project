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
  Item
}) {

  //Used as the option data for the Select drop-dwon element

  const charOptions = characters.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

  //Used in the Create Team Form for the Character Preview data

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
        charOptions={charOptions}
        teams={teams}
        setTeams={setTeams}
        Item={Item}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        getCharData={getCharData}
      />
      <TeamList
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
