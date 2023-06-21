import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Teams from "./Teams";
import CharList from "./CharList";

function App() {
  const [page, setPage] = useState("Team");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://gsi.fly.dev/characters?limit=100")
      .then((r) => r.json())
      .then((data) =>
        setCharacters(
          data.results.map((char) => {
            return char.name;
          })
        )
      );
  }, []);

  return (
    <main>
      <Header />
      <Nav page={page} setPage={setPage} />
      {page === "Team" ? <Teams characters={characters} /> : <CharList />}
    </main>
  );
}

export default App;
