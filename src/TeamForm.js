import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function TeamForm({
  charOptions,
  teams,
  setTeams,
  Item,
  handleAetherLumine,
  handleName,
  getCharData,
}) {

  //Object used as state for controlled form inputs

  const [formData, setFormData] = useState({
    char1: "",
    char2: "",
    char3: "",
    char4: "",
    name: "",
  });

  //Sets formData name key value

  function handleTeamName(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //Sets formData based on the changed input's name and value. If/else statement used to make sure a character is only selected once in a given team

  function handleChange(e) {
    if (
      e.target.value !== formData.char1 &&
      e.target.value !== formData.char2 &&
      e.target.value !== formData.char3 &&
      e.target.value !== formData.char4
    ) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      alert("This character is already on the team!");
    }
  }

  //Used to submit and POST formData to the server as a new team. Autogenerates a team name if one was not supplied. Checks that the required four characters have been supplied before submission.

  function handleSubmit(e) {
    e.preventDefault();
    function teamCheck(tName = teams.length) {
      const tCheck = teams.find(
        (t) => t.name.toLowerCase() === `Team ${tName}`.toLowerCase()
      );
      return tCheck === undefined ? `Team ${tName}` : teamCheck(tName + 1);
    }

    if (
      formData.name === "" &&
      formData.char1 !== "" &&
      formData.char2 !== "" &&
      formData.char3 !== "" &&
      formData.char4 !== ""
    ) {
      fetch("https://genshin-team-creator-back-end.onrender.com/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          char1: formData.char1,
          char2: formData.char2,
          char3: formData.char3,
          char4: formData.char4,
          name: teamCheck(),
        }),
      })
        .then((r) => r.json())
        .then((data) =>
          setTeams([
            ...teams,
            {
              char1: formData.char1,
              char2: formData.char2,
              char3: formData.char3,
              char4: formData.char4,
              name: teamCheck(),
              id: data.id,
            },
          ])
        );
    } else if (
      formData.char1 !== "" &&
      formData.char2 !== "" &&
      formData.char3 !== "" &&
      formData.char4 !== ""
    ) {
      fetch("https://genshin-team-creator-back-end.onrender.com/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          char1: formData.char1,
          char2: formData.char2,
          char3: formData.char3,
          char4: formData.char4,
          name: formData.name,
        }),
      })
        .then((r) => r.json())
        .then((data) =>
          setTeams([
            ...teams,
            {
              char1: formData.char1,
              char2: formData.char2,
              char3: formData.char3,
              char4: formData.char4,
              name: formData.name,
              id: data.id,
            },
          ])
        );
    } else {
      alert("Please select four characters before saving.");
    }
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Create Team</h3>
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
        <Grid item xs={12} sx={{ m: 4 }}>
          <Item elevation={8}>
            <h3>{formData.name}</h3>
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
                    <p>{formData.char1}</p>
                    {formData.char1 === "Traveller (male)" ||
                    formData.char1 === "Traveller (female)" ? (
                      handleAetherLumine(formData.char1)
                    ) : formData.char1 === "" ? (
                      <img
                        src={`https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/193500971_4390187504347051_2259047495056824025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=b9115d&_nc_ohc=NW_EYf4QdrYAX_JgWrf&_nc_ht=scontent-atl3-1.xx&oh=00_AfCWaKxsp61iPH3LJM7jRw7-zyweRutG_8VFu9XWlVs6Og&oe=64C47211`}
                        alt="unknown"
                        className="team-char-img"
                      />
                    ) : (
                      <img
                        src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                          formData.char1.toLowerCase()
                        )}-icon.png`}
                        alt={formData.char1}
                        className="team-char-img"
                      />
                    )}
                    {getCharData(formData.char1)}
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
                    <p>{formData.char2}</p>
                    {formData.char2 === "Traveller (male)" ||
                    formData.char2 === "Traveller (female)" ? (
                      handleAetherLumine(formData.char2)
                    ) : formData.char2 === "" ? (
                      <img
                        src={`https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/193500971_4390187504347051_2259047495056824025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=b9115d&_nc_ohc=NW_EYf4QdrYAX_JgWrf&_nc_ht=scontent-atl3-1.xx&oh=00_AfCWaKxsp61iPH3LJM7jRw7-zyweRutG_8VFu9XWlVs6Og&oe=64C47211`}
                        alt="unknown"
                        className="team-char-img"
                      />
                    ) : (
                      <img
                        src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                          formData.char2.toLowerCase()
                        )}-icon.png`}
                        alt={formData.char2}
                        className="team-char-img"
                      />
                    )}
                    {getCharData(formData.char2)}
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
                    <p>{formData.char3}</p>
                    {formData.char3 === "Traveller (male)" ||
                    formData.char3 === "Traveller (female)" ? (
                      handleAetherLumine(formData.char3)
                    ) : formData.char3 === "" ? (
                      <img
                        src={`https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/193500971_4390187504347051_2259047495056824025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=b9115d&_nc_ohc=NW_EYf4QdrYAX_JgWrf&_nc_ht=scontent-atl3-1.xx&oh=00_AfCWaKxsp61iPH3LJM7jRw7-zyweRutG_8VFu9XWlVs6Og&oe=64C47211`}
                        alt="unknown"
                        className="team-char-img"
                      />
                    ) : (
                      <img
                        src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                          formData.char3.toLowerCase()
                        )}-icon.png`}
                        alt={formData.char3}
                        className="team-char-img"
                      />
                    )}
                    {getCharData(formData.char3)}
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
                    <p>{formData.char4}</p>
                    {formData.char4 === "Traveller (male)" ||
                    formData.char4 === "Traveller (female)" ? (
                      handleAetherLumine(formData.char4)
                    ) : formData.char4 === "" ? (
                      <img
                        src={`https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/193500971_4390187504347051_2259047495056824025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=b9115d&_nc_ohc=NW_EYf4QdrYAX_JgWrf&_nc_ht=scontent-atl3-1.xx&oh=00_AfCWaKxsp61iPH3LJM7jRw7-zyweRutG_8VFu9XWlVs6Og&oe=64C47211`}
                        alt="unknown"
                        className="team-char-img"
                      />
                    ) : (
                      <img
                        src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                          formData.char4.toLowerCase()
                        )}-icon.png`}
                        alt={formData.char4}
                        className="team-char-img"
                      />
                    )}
                    {getCharData(formData.char4)}
                  </Item>
                </Grid>
              </Grid>
              <div style={{ margin: "12px" }}>
                <Button variant="contained" onClick={handleSubmit} size="small">
                  Save
                </Button>
              </div>
            </Box>
          </Item>
        </Grid>
      </Box>
    </div>
  );
}

export default TeamForm;
