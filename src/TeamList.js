import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


function TeamList({ characters, handleAetherLumine, handleName, teams, setTeams }) {

  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));

  const teamList = teams.map((team) => {
    return (
      <Grid key={team.id} item xs={12}>
        <Item elevation={8}>
          <h3>{team.name}</h3>
          <Box sx={{ m: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Item elevation={2}>
                  {team.char1}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2}>
                  {team.char2}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2}>
                  {team.char3}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2}>
                  {team.char4}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Item>
      </Grid>
    );
  });


  return (
    <Box sx={{ m: 4 }}>
      <Grid container spacing={4}>
        {teamList}
      </Grid>
    </Box>
  )
}

export default TeamList;
