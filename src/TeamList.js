import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import EditForm from "./EditForm";

function TeamList({
  handleAetherLumine,
  handleName,
  teams,
  setTeams,
  charOptions,
  Item,
  getCharData,
}) {

  //State used to select which team to hide/unhide the Edit Team Form

  const [checked, setChecked] = useState(0);

  //Deletes the team from the server. Uses a confirmation prompt before deleting

  function handleDelete(id, name) {
    const response = window.confirm(`Are you sure you want to Delete ${name}?`);

    if (response === true) {
      fetch(`https://genshin-team-creator-back-end.onrender.com/teams/${id}`, {
        method: "DELETE",
      }).then(() => setTeams(() => teams.filter((t) => t.name !== name)));
    }
  }

  //Toggles the Edit Team Form when the Edit Button for a team (indicated by the 'id' parameter) is activated

  function handleHide(id) {
    return checked === id ? setChecked(0) : setChecked(id);
  }

  const teamList = teams.map((team) => {
    return (
      <Grid key={team.name} item xs={12}>
        <Item elevation={8}>
          <h3>{team.name}</h3>
          <Box sx={{ m: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Item
                  elevation={2}
                  sx={{
                    backgroundColor: "white",
                    color: "midnightblue",
                    fontWeight: "bold",
                  }}
                >
                  <p>{team.char1}</p>
                  {team.char1 === "Traveller (male)" ||
                  team.char1 === "Traveller (female)" ? (
                    handleAetherLumine(team.char1)
                  ) : (
                    <img
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-${handleName(
                        team.char1.toLowerCase()
                      )}.png`}
                      alt={team.char1}
                      className="team-char-img"
                    />
                  )}
                  {getCharData(team.char1)}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item
                  elevation={2}
                  sx={{
                    backgroundColor: "white",
                    color: "midnightblue",
                    fontWeight: "bold",
                  }}
                >
                  <p>{team.char2}</p>
                  {team.char2 === "Traveller (male)" ||
                  team.char2 === "Traveller (female)" ? (
                    handleAetherLumine(team.char2)
                  ) : (
                    <img
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-${handleName(
                        team.char2.toLowerCase()
                      )}.png`}
                      alt={team.char2}
                      className="team-char-img"
                    />
                  )}
                  {getCharData(team.char2)}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item
                  elevation={2}
                  sx={{
                    backgroundColor: "white",
                    color: "midnightblue",
                    fontWeight: "bold",
                  }}
                >
                  <p>{team.char3}</p>
                  {team.char3 === "Traveller (male)" ||
                  team.char3 === "Traveller (female)" ? (
                    handleAetherLumine(team.char3)
                  ) : (
                    <img
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-${handleName(
                        team.char3.toLowerCase()
                      )}.png`}
                      alt={team.char3}
                      className="team-char-img"
                    />
                  )}
                  {getCharData(team.char3)}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item
                  elevation={2}
                  sx={{
                    backgroundColor: "white",
                    color: "midnightblue",
                    fontWeight: "bold",
                  }}
                >
                  <p>{team.char4}</p>
                  {team.char4 === "Traveller (male)" ||
                  team.char4 === "Traveller (female)" ? (
                    handleAetherLumine(team.char4)
                  ) : (
                    <img
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-${handleName(
                        team.char4.toLowerCase()
                      )}.png`}
                      alt={team.char4}
                      className="team-char-img"
                    />
                  )}
                  {getCharData(team.char4)}
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Collapse in={checked === team.id}>
            <EditForm
              name={team.name}
              id={team.id}
              char1={team.char1}
              char2={team.char2}
              char3={team.char3}
              char4={team.char4}
              teams={teams}
              setTeams={setTeams}
              charOptions={charOptions}
            />
          </Collapse>
          <Box sx={{ m: 2, float: "right" }}>
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={() => handleHide(team.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={() => handleDelete(team.id, team.name)}
            >
              Delete
            </Button>
          </Box>
        </Item>
      </Grid>
    );
  });

  return (
    <Box sx={{ m: 4 }}>
      <Grid container spacing={4}>
        {teamList}
      </Grid>
    </Box>
  );
}

export default TeamList;
