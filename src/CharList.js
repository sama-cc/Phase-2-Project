import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

function CharList({ characters }) {
  function handleName(name) {
    switch (name) {
      case "hu tao":
        return "hu-tao";
      case "kazuha":
        return "kaedehara-kazuha";
      case "ayaka":
        return "kamisato-ayaka";
      case "ayato":
        return "kamisato-ayato";
      case "sara":
        return "kujou-sara";
      case "raiden shogun":
        return "raiden-shogun";
      case "kokomi":
        return "sangonomiya-kokomi";
      case "itto":
        return "arataki-itto";
      case "yun jin":
        return "yun-jin";
      case "yae":
        return "yae-miko";
      case "kuki":
        return "kuki-shinobu";
      default:
        return name;
    }
  }

  function handleAetherLumine(name) {
    return name === "Traveller (male)" ? (
      <img
        src={`https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png`}
        alt={name}
        className="card"
      />
    ) : (
      <img
        src={`https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Lumine_Icon.png`}
        alt={name}
        className="card"
      />
    );
  }

  const Item = styled(Paper)(() => ({
    backgroundColor: "lightskyblue",
    padding: 8,
    textAlign: "center",
    color: "white",
  }));
  const charList = characters.map((char) => {
    return (
      <Grid key={char.id} item xs={3}>
        <Item elevation={3}>
          <h3>{char.name}</h3>
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
