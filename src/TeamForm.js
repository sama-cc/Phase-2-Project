import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TeamForm() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="team-name"
            label="Team Name"
            defaultValue=""
            size="small"
          />
        </div>
      </Box>
    </div>
  );
}

export default TeamForm;
