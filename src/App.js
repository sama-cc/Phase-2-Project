import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Teams from "./Teams";
import Home from "./Home";
import { Route } from "react-router-dom";
import CharContainer from "./CharContainer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {

//State for the Character and Team lists used throughoout the app

  const [characters, setCharacters] = useState([]);
  const [teams, setTeams] = useState([]);

  //Used to fetch initial data from the API server and set it to state

  useEffect(() => {
    fetch("https://genshin-team-creator-back-end.onrender.com/characters")
      .then((r) => r.json())
      .then((data) =>
        setCharacters(
          data.map((char) => {
            return char;
          })
        )
      );

      fetch("https://genshin-team-creator-back-end.onrender.com/teams")
      .then((r) => r.json())
      .then((data) =>
        setTeams(
          data.map((team) => {
            return team;
          })
        )
      );


  }, []);

  //Stylized Paper component

  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 3,
    textAlign: "center",
    color: "white",
  }));

  //Used to convert local values for certain names that did not match the external API names

  function handleName(name) {
    switch (name) {
      case "amber":
        return "ambor";
      case "noelle":
        return "noel";  
      case "jean":
        return "qin";
      case "yanfei":
        return "feiyan";
      case "hu tao":
        return "hutao";
      case "raiden shogun":
        return "shougun";
      case "yun jin":
        return "yunjin";
      case "kuki":
        return "shinobu";
      case "thoma":
        return "tohma";
      default:
        return name;
    }
  }

  //Converts local name value to match external API that is a different source from above

  function handleAetherLumine(name) {
    return name === "Traveller (male)" ? (
      <img
        src={`https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png`}
        alt={name}
        className="card"
      />
    ) : (
      <img
        src={`https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Lumine_Icon.png`}
        alt={name}
        className="card"
      />
    );
  }

  return (
    <main>
      <Route path="/">
        <Header />
      </Route>
      <Nav />
      <Route path="/home">
        <Home Item={Item} />
      </Route>
      <Route path="/teams">
        <Teams
          characters={characters}
          handleName={handleName}
          handleAetherLumine={handleAetherLumine}
          teams={teams}
          setTeams={setTeams}
          Item={Item}
        />
      </Route>
      <Route path="/characters">
        <CharContainer
          characters={characters}
          handleName={handleName}
          handleAetherLumine={handleAetherLumine}
        />
      </Route>           
    </main>
  );
}

export default App;
