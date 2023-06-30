import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group" size="large" style={{ color: "white" }}>
          <Button component={Link} to={'/home'}>Home</Button>
          <Button component={Link} to={'/characters'}>Characters</Button>
          <Button component={Link} to={'/teams'}>Teams</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Nav;
