import React from "react";
import Grid from "@mui/material/Grid";

export default function Home({ Item }) {
    return (
           <Grid sx={{ m: 4 }} item xs={12}>
      <Item elevation={8}>
          <h3>Welcome travellers!</h3> 
          <p>I have created a tool to help fellow travellers organize, create and save team compsitions. If you look at the navigation bar above you will see a link to the "Characters" page. There you can view, search and filter through the available characters to find the characters that best fit your teams. Filter options include Vision element, Weapon type and rarity. On the Navigation Bar you will also see the "Teams" link. There you can configure and manage your teams, as well as see a list of all of your saved teams. Have fun and happy adventuring!</p>
      </Item>
    </Grid> 
    )
}