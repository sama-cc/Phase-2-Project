import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

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
        <ButtonGroup variant="text" aria-label="text button group" size="small">
          <Button>Characters</Button>
          <Button>Teams</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Nav;
