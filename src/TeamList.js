import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";

function TeamList({
  characters,
  handleAetherLumine,
  handleName,
  teams,
  handleEdit,
  handleDelete,
  setTeams,
  formData,
  setFormData,
  handleTeamName,
  handleChange,
  charOptions,
}) {
  const [checked, setChecked] = useState(0);

  const handleHide = (id) => {
    checked === id ? setChecked(0) : setChecked(id);
  };

  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));

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
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                        team.char1.toLowerCase()
                      )}-icon.png`}
                      alt={team.char1}
                      className="team-char-img"
                    />
                  )}
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
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                        team.char2.toLowerCase()
                      )}-icon.png`}
                      alt={team.char2}
                      className="team-char-img"
                    />
                  )}
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
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                        team.char3.toLowerCase()
                      )}-icon.png`}
                      alt={team.char3}
                      className="team-char-img"
                    />
                  )}
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
                      src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                        team.char4.toLowerCase()
                      )}-icon.png`}
                      alt={team.char4}
                      className="team-char-img"
                    />
                  )}
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Collapse in={checked === team.id}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h3>Edit Team</h3>
              <div>
                <TextField
                  id="team-name"
                  label="Team Name"
                  size="small"
                  onChange={(e) => handleTeamName(e)}
                  value={formData.name}
                  name="name"
                />
              </div>
              <div>
                <TextField
                  id="character-1"
                  select
                  label="Select Character 1"
                  size="small"
                  name="char1"
                  onChange={(e) => handleChange(e)}
                  value={formData.char1}
                >
                  {charOptions}
                </TextField>
                <TextField
                  id="character-2"
                  select
                  label="Select Character 2"
                  defaultValue=""
                  size="small"
                  name="char2"
                  onChange={(e) => handleChange(e)}
                  value={formData.char2}
                >
                  {charOptions}
                </TextField>
                <TextField
                  id="character-3"
                  select
                  label="Select Character 3"
                  defaultValue=""
                  size="small"
                  name="char3"
                  onChange={(e) => handleChange(e)}
                  value={formData.char3}
                >
                  {charOptions}
                </TextField>
                <TextField
                  id="character-4"
                  select
                  label="Select Character 4"
                  defaultValue=""
                  size="small"
                  name="char4"
                  onChange={(e) => handleChange(e)}
                  value={formData.char4}
                >
                  {charOptions}
                </TextField>
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={() => handleEdit(team.id, team.name)}
                  size="small"
                >
                  Save
                </Button>
              </div>
            </Box>
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
