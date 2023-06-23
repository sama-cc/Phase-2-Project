import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

function CharList({ characters, handleAetherLumine, handleName }) {
  
  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));

  const charList = characters.map((char) => {
    return (
      <Grid key={char.id} item xs={3}>
        <Item elevation={8}>
          <div
            className="nameBar"
            style={{
              backgroundImage: `url("https://cdn.wanderer.moe/genshin-impact/namecards/${handleName(
                char.name.toLowerCase()
              )}-bar.png")`,
              width: "auto",
              height: "auto",
            }}
          >
            <h2>{char.name}</h2>
          </div>
          {char.name === "Traveller (male)" ||
          char.name === "Traveller (female)" ? (
            handleAetherLumine(char.name)
          ) : (
            <img
              src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${handleName(
                char.name.toLowerCase()
              )}-icon.png`}
              alt={char.name}
              className="card"
            />
          )}
          <p><h4>{char.vision}</h4></p>
          <p><h4>{char.weapon}</h4></p>
          <p>
            {char.rarity === "4_star" ? (
              <>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </>
            ) : (
              <>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </>
            )}
          </p>
        </Item>
      </Grid>
    );
  });

  return (
    <Box sx={{ m: 4 }}>
      <Grid container spacing={4}>
        {charList}
      </Grid>
    </Box>
  );
}

export default CharList;
