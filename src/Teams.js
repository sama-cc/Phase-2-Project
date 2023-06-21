import React from "react";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";

function Teams({ characters }) {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Team Submitted.");
  }

  return (
    <div className="team-container">
      <TeamForm characters={characters} handleSubmit={handleSubmit} />
      <TeamList />
    </div>
  );
}

export default Teams;
