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
  editData,
  setEditData,
  handleEditChange,
  handleEditName
}) {
  const [checked, setChecked] = useState(0);

  const handleHide = (id, name, c1, c2, c3, c4) => {
    checked === id ? setChecked(0) : setChecked(id);
    setEditData({
      char1: c1,
      char2: c2,
      char3: c3,
      char4: c4,
      name: name,
      id: id
    })
    console.log(editData)
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
                  onChange={(e) => handleEditName(e)}
                  value={editData.name}
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
                  onChange={(e) => handleEditChange(e)}
                  value={editData.char1}
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
                  onChange={(e) => handleEditChange(e)}
                  value={editData.char2}
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
                  onChange={(e) => handleEditChange(e)}
                  value={editData.char3}
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
                  onChange={(e) => handleEditChange(e)}
                  value={editData.char4}
                >
                  {charOptions}
                </TextField>
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={(e) => handleEdit(e)}
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
              onClick={() => handleHide(team.id, team.name, team.char1, team.char2, team.char3, team.char4)}
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
