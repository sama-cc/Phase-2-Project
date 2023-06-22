import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

function CharList({ characters }) {
  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));
  const charList = characters.map((char) => {
    return (
      <Grid key={char} item xs={3}>
        <Item elevation={3}>
          <h3>{char.name}</h3>
          <img
            src={`https://cdn.wanderer.moe/genshin-impact/character-icons/${char.name.toLowerCase()}-icon.png`}
          />
          <p>{char.vision}</p>
          <p>{char.weapon}</p>
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
