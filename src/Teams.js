import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    char1: "",
    char2: "",
    char3: "",
    char4: "",
    name: "",
  });

  const charOptions = characters.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

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

  function handleEdit(id, team) {
    console.log(`${team} has been edited`);
    /*
      fetch (`http://localhost:3000/teams/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        "correctIndex": value
      })
    })
    .then(r=>r.json())
    .then(data=>console.log("Changes saved to Team"))
    setTeams(teams.map(t=>{
      if (t.id === id) {
        return {...t, "correctIndex": value}
      } else {
        return t
      }
    }))
    */
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "DELETE",
    }).then(() => setTeams(() => teams.filter((t) => t.id !== id)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (
      formData.name === "" &&
      formData.char1 !== "" &&
      formData.char2 !== "" &&
      formData.char3 !== "" &&
      formData.char4 !== ""
    ) {
      fetch("https://964ytk-3000.csb.app/teams", {
        //fetch ("http://localhost:3000/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          char1: formData.char1,
          char2: formData.char2,
          char3: formData.char3,
          char4: formData.char4,
          name: `Team ${teams.length + 1}`,
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
              name: `Team ${teams.length + 1}`,
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
      fetch("https://964ytk-3000.csb.app/teams", {
        //fetch ("http://localhost:3000/teams", {
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
    <div className="team-container">
      <TeamForm
        characters={characters}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        handleTeamName={handleTeamName}
        handleChange={handleChange}
        charOptions={charOptions}
      />
      <TeamList
        characters={characters}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        teams={teams}
        setTeams={setTeams}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        formData={formData}
        setFormData={setFormData}
        handleTeamName={handleTeamName}
        handleChange={handleChange}
        charOptions={charOptions}
      />
    </div>
  );
}

export default Teams;
