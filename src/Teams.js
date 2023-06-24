import React, { useState } from "react";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (
      formData.name !== "" &&
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
      alert("Please fill out all fields before saving.");
    }
  }

  return (
    <div className="team-container">
      <TeamForm
        characters={characters}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <TeamList
        characters={characters}
        handleAetherLumine={handleAetherLumine}
        handleName={handleName}
        teams={teams}
        setTeams={setTeams}
      />
    </div>
  );
}

export default Teams;
