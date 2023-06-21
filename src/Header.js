import React, { useState } from "react";
import Button from "@mui/material/Button";

function Header() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(!login);
  }

  return (
    <div className="main-header">
      <Button variant="contained" onClick={handleLogin}>
        {login ? "Logout" : "Login"}
      </Button>
    </div>
  );
}

export default Header;
