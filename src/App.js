import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Teams from "./Teams";
import CharList from "./CharList";

function App() {
  const [page, setPage] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://gsi.fly.dev/characters?limit=100")
      .then((r) => r.json())
      .then((data) =>
        setCharacters(
          data.results.map((char) => {
            return char;
          })
        )
      );
  }, []);

  return (
    <main>
      <Header />
      <Nav page={page} setPage={setPage} />
      {page ? (
        <Teams characters={characters} />
      ) : (
        <CharList characters={characters} />
      )}
    </main>
  );
}

export default App;
