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
                <Item elevation={2} sx={{ backgroundColor: "white", color: "midnightblue", fontWeight: "bold" }}>
                  <p>{team.char1}</p>
                  {team.char1 === "Traveller (male)" ||
                  team.char1 === "Traveller (female)" ? (
                    handleAetherLumine(team.char1)
                  ) : (
                  <img
                  src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                    team.char1.toLowerCase()
                  )}-icon.png`}
                  alt={team.char1}
                  className="team-char-img"
                  />
                  )
                  }
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2} sx={{ backgroundColor: "white", color: "midnightblue", fontWeight: "bold" }}>
                  <p>{team.char2}</p>
                  {team.char2 === "Traveller (male)" ||
                  team.char2 === "Traveller (female)" ? (
                    handleAetherLumine(team.char2)
                  ) : (
                  <img
                  src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                    team.char2.toLowerCase()
                  )}-icon.png`}
                  alt={team.char2}
                  className="team-char-img"
                  />
                  )
                  }
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2} sx={{ backgroundColor: "white", color: "midnightblue", fontWeight: "bold" }}>
                  <p>{team.char3}</p>
                  {team.char3 === "Traveller (male)" ||
                  team.char3 === "Traveller (female)" ? (
                    handleAetherLumine(team.char3)
                  ) : (
                  <img
                  src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                    team.char3.toLowerCase()
                  )}-icon.png`}
                  alt={team.char3}
                  className="team-char-img"
                  />
                  )
                  }
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item elevation={2} sx={{ backgroundColor: "white", color: "midnightblue", fontWeight: "bold" }}>
                  <p>{team.char4}</p>
                  {team.char4 === "Traveller (male)" ||
                  team.char4 === "Traveller (female)" ? (
                    handleAetherLumine(team.char4)
                  ) : (
                  <img
                  src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                    team.char4.toLowerCase()
                  )}-icon.png`}
                  alt={team.char4}
                  className="team-char-img"
                  />
                  )
                  }
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
