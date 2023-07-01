import React from "react";
import Grid from "@mui/material/Grid";

export default function Home({ Item }) {
  return (
    <Grid height="100%" sx={{ m: 4 }} item xs={12}>
      <Item
        elevation={8}
        style={{
          backgroundImage:
            "url('https://preview.redd.it/wabt2ui2s7s51.png?width=1080&crop=smart&auto=webp&v=enabled&s=fcdc1209189f9bf83f3c9121426ac35a53dbc133')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="home">
          <h2>Welcome travellers!</h2>
          <p>
            I have created a tool to help fellow travellers organize, create and
            save team compsitions.
          </p>
          <p>
            If you look at the navigation bar above you will see a link to the
            "Characters" page. There you can view, search and filter through the
            available characters to find the characters that best fit your
            teams. Filter options include Vision element, Weapon type and
            rarity.
          </p>
          <p>
            On the Navigation Bar you will also see the "Teams" link. There you
            can configure and manage your teams, as well as see a list of all of
            your saved teams.
          </p>
          <p>Have fun and happy adventuring!</p>
          <p></p>
        </div>
      </Item>
    </Grid>
  );
}
