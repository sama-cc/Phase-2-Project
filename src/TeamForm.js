import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TeamForm({ characters, charOptions, teams, setTeams }) {

  const [formData, setFormData] = useState({
    char1: "",
    char2: "",
    char3: "",
    char4: "",
    name: "",
  });

  function handleTeamName(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

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
      fetch ("http://localhost:3000/teams", {
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
      fetch ("http://localhost:3000/teams", {
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
        <div>
          <Button variant="contained" onClick={handleSubmit} size="small">
            Save
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default TeamForm;
