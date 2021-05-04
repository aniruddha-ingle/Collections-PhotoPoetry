import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Backdrop,
} from "@material-ui/core";
import useStyles from "../styles";
import Poem from "./Poem";

const GalleryView = ({ cards }) => {
  const classes = useStyles();
  const [openPoem, setOpenPoem] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [buttonId, setbuttonId] = useState(0);

  const handlePoemClose = () => {
    setOpenPoem(false);
  };
  const handleAboutClose = () => {
    setOpenAbout(false);
  };
  const handlePoemToggle = (e) => {
    const id = e.currentTarget.id;
    console.log("Clicked Baby Bitch!");
    setbuttonId(id - 1);
    setOpenPoem(true);
  };
  const handleAboutToggle = (e) => {
    const id = e.currentTarget.id;
    setbuttonId(id - 1);
    setOpenAbout(!openAbout);
  };
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={card.image} />
              <CardContent className={classes.cardContent}>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h6"
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography style={{ textAlign: "center" }} variant="body2">
                  {card["poem"][0] + "..."}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Button
                  id={card.id}
                  className={classes.buttonCard}
                  size="small"
                  color="primary"
                  onClick={handlePoemToggle}
                >
                  Read Poem
                </Button>
                <Backdrop
                  className={classes.backdrop}
                  open={openPoem}
                  onClick={handlePoemClose}
                >
                  <Poem buttonId={buttonId} cards={cards}></Poem>
                </Backdrop>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryView;
