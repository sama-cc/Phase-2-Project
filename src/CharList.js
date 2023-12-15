import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

//This component serves only to display the Character List based on the charsToDisplay state

function CharList({ charsToDisplay, handleAetherLumine, handleName, Item }) {
  let charList = charsToDisplay.map((char) => {
    return (
      <Grid key={char.id} item xs={3}>
        <Item elevation={8}>
          <h2>{char.name}</h2>
          {char.name === "Traveller (male)" ||
          char.name === "Traveller (female)" ? (
            handleAetherLumine(char.name)
          ) : (
            <img
              src={`https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon${handleName(
                char.name.toLowerCase()
              )}-icon.png`}
              alt={char.name}
              className="card"
            />
          )}
          <h4>{char.vision}</h4>
          <h4>{char.weapon}</h4>
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
    <>
      <Box sx={{ m: 4 }}>
        <Grid container spacing={4}>
          {charList}
        </Grid>
      </Box>
    </>
  );
}

export default CharList;
