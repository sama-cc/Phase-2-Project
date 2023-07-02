import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function EditForm({
  name,
  id,
  char1,
  char2,
  char3,
  char4,
  teams,
  setTeams,
  charOptions,
}) {

//Object used as state to hold the Edit Form Data

  const [editData, setEditData] = useState({
    char1: char1,
    char2: char2,
    char3: char3,
    char4: char4,
    name: name,
    id: id,
  });

  //Changes editData name key value

  function handleEditName(e) {
    setEditData({ ...editData, name: e.target.value });
  }

  //Sets editData based on the changed input's name and value. If/else statement used to make sure a character is only selected once in a given team

  function handleEditChange(e) {
    if (
      e.target.value !== editData.char1 &&
      e.target.value !== editData.char2 &&
      e.target.value !== editData.char3 &&
      e.target.value !== editData.char4
    ) {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    } else {
      alert("This character is already on the team!");
    }
  }

  //Used to submit and PATCH editData to the server for the selected team. 

  function handleEdit(e, id) {
    e.preventDefault();

    function teamCheck(tName = teams.length) {
      const tCheck = teams.find(
        (t) => t.name.toLowerCase() === `Team ${tName}`.toLowerCase()
      );
      return tCheck === undefined ? `Team ${tName}` : teamCheck(tName + 1);
    }

    if (
      editData.name === "" &&
      editData.char1 !== "" &&
      editData.char2 !== "" &&
      editData.char3 !== "" &&
      editData.char4 !== ""
    ) {
        fetch (`http://localhost:3000/teams/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          char1: editData.char1,
          char2: editData.char2,
          char3: editData.char3,
          char4: editData.char4,
          name: teamCheck(),
        }),
      })
        .then((r) => r.json())
        .then((data) =>
          setTeams(
            teams.map((t) => {
              if (t.id === id) {
                return {
                  ...t,
                  char1: data.char1,
                  char2: data.char2,
                  char3: data.char3,
                  char4: data.char4,
                  name: teamCheck(),
                };
              } else {
                return t;
              }
            })
          )
        );
    } else if (
      editData.char1 !== "" &&
      editData.char2 !== "" &&
      editData.char3 !== "" &&
      editData.char4 !== ""
    ) {
        fetch (`http://localhost:3000/teams/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          char1: editData.char1,
          char2: editData.char2,
          char3: editData.char3,
          char4: editData.char4,
          name: editData.name,
        }),
      })
        .then((r) => r.json())
        .then((data) =>
          setTeams(
            teams.map((t) => {
              if (t.id === id) {
                return {
                  ...t,
                  char1: data.char1,
                  char2: data.char2,
                  char3: data.char3,
                  char4: data.char4,
                  name: data.name,
                };
              } else {
                return t;
              }
            })
          )
        );
    } else {
      alert("Please select four characters before saving.");
    }
  }

  return (
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
          id={`team-name-${id}`}
          label="Team Name"
          size="small"
          onChange={(e) => handleEditName(e)}
          value={editData.name}
          name="name"
        />
      </div>
      <div>
        <TextField
          id={`character-1-${id}`}
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
          id={`character-2-${id}`}
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
          id={`character-3-${id}`}
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
          id={`character-4-${id}`}
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
          onClick={(e) => handleEdit(e, id)}
          size="small"
          sx={{ m: 2}}
        >
          Save
        </Button>
      </div>
    </Box>
  );
}
