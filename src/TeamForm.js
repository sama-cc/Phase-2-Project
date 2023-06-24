import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function TeamForm({ characters, handleSubmit, formData, setFormData }) {
  function handleTeamName(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    console.log(e.target.value);
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

  const charOptions = characters.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

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
