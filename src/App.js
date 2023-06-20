import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Teams from "./Teams";
import CharList from "./CharList"; 

function App() {

const [page, setPage] = useState("Team")

  return (
    <main>
      <Header />
      <Nav page={page} setPage={setPage} />
      {page === "Team" ? <Teams /> : <CharList />}
    </main>
  );
}

export default App;
