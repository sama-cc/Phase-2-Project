import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Teams from "./Teams";
import CharList from "./CharList";

function App() {
  const [page, setPage] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [teams, setTeams] = useState([]);

  /*
  useEffect(() => {
    //fetch("https://gsi.fly.dev/characters?limit=100")
    fetch("https://964ytk-3000.csb.app/characters")
      .then((r) => r.json())
      .then((data) =>
        setCharacters(
          data.map((char) => {
            return char;
          })
        )
      );

    fetch("https://964ytk-3000.csb.app/teams")
      .then((r) => r.json())
      .then((data) =>
        setTeams(
          data.map((team) => {
            return team;
          })
        )
      );
  }, []);
*/
  
  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((r) => r.json())
      .then((data) =>
        setCharacters(
          data.map((char) => {
            return char;
          })
        )
      );

      fetch("http://localhost:3000/teams")
      .then((r) => r.json())
      .then((data) =>
        setTeams(
          data.map((team) => {
            return team;
          })
        )
      );


  }, []);
  
  

  function handleName(name) {
    switch (name) {
      case "hu tao":
        return "hu-tao";
      case "kazuha":
        return "kaedehara-kazuha";
      case "ayaka":
        return "kamisato-ayaka";
      case "ayato":
        return "kamisato-ayato";
      case "sara":
        return "kujou-sara";
      case "raiden shogun":
        return "raiden-shogun";
      case "kokomi":
        return "sangonomiya-kokomi";
      case "itto":
        return "arataki-itto";
      case "yun jin":
        return "yun-jin";
      case "yae":
        return "yae-miko";
      case "kuki":
        return "kuki-shinobu";
      default:
        return name;
    }
  }

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
      <Header />
      <Nav page={page} setPage={setPage} />
      {page ? (
        <Teams
          characters={characters}
          handleName={handleName}
          handleAetherLumine={handleAetherLumine}
          teams={teams}
          setTeams={setTeams}
        />
      ) : (
        <CharList
          characters={characters}
          handleName={handleName}
          handleAetherLumine={handleAetherLumine}
        />
      )}
    </main>
  );
}

export default App;
