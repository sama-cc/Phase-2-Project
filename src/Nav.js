import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function Nav({ page, setPage }) {
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
        <ButtonGroup variant="text" aria-label="text button group" size="large">
          <Button onClick={() => setPage(false)}>Characters</Button>
          <Button onClick={() => setPage(true)}>Teams</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Nav;
