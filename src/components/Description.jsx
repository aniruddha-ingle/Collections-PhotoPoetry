import React from "react";
import {
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";

const Description = () => {
    return (
        <div> 
            <br/>
            <Container maxWidth="md">
                <Typography gutterBottom variant="h2" align="center" color="textPrimary">
                Project Description
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="textPrimary"
                gutterBottom
                >
                The goal of this project is to reconcile the vision of Photography with the poise of Poetry
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                >
                An archival record of the beauty I see in many mundane things
                around me. There are many short glimpeses of this beauty that
                surrounds me, gathering static in my camera roll. So, I decided to
                share them with you. Hoping to inspire you to look at the everyday
                things with a special appreciation.
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="textPrimary"
                gutterBottom
                >
                The goal of this project is to reconcile the vision of Photography with the poise of Poetry
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                >
                An archival record of the beauty I see in many mundane things
                around me. There are many short glimpeses of this beauty that
                surrounds me, gathering static in my camera roll. So, I decided to
                share them with you. Hoping to inspire you to look at the everyday
                things with a special appreciation.
                </Typography>
            </Container>
            <br/>
        </div>
     );
}
 
export default Description;