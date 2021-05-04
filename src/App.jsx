import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import GalleryView from "./components/GalleryView";
import Description from "./components/Description";
import ScrollView from "./components/ScrollView";
import cards from "./components/CardsData";

const App = () => {
  const classes = useStyles();
  const [viewKind, setViewKind] = useState("Description");
  const galleryViewHandler = () => {
    setViewKind("Gallery");
  };
  const descViewHandler = () => {
    setViewKind("Description");
  };
  const scrollViewHandler = () => {
    setViewKind("Scroll");
  };
  const viewHandler = () => {
    if (viewKind === "Gallery") return <GalleryView cards={cards} />;
    else if (viewKind === "Scroll") return <ScrollView cards={cards} />;
    else if (viewKind === "Description") return <Description />;
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photographs of Poetic Memories</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.sheet}>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography variant="h1" align="center" color="textPrimary">
              {"C O L L E C T I O N S 123"}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The goal of this project is to reconcile the <i>vision</i> of{" "}
              <b>Photography</b> with the <i>poise</i> of <b>Poetry</b>.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              By Rahul Terwankar
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              Who is a keen observer of his surroundings and maintains an
              aesthetic vault of many memories through his lens. If we were at a
              college event or on a trip to the mountains with Rahul, it was
              customary for us to text him and ask for the lovely, tasteful, and
              candid memories he captured. When we did get the link, it was
              customary to hope we could find ourselves in those memories.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              And Aniruddha Ingle
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              Who is typing this with the intention of being your narrator
              through this journey, <i>kya scene?</i>
              <br />I met Rahul during my bachelor's degree, he was the senior
              that behaved like a kind older brother. His appreciation for my
              poetry and permision to use his pictures to build this website
              have made this project possible. Thanks, Rahul!
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={galleryViewHandler}
                    variant="contained"
                    className={
                      viewKind === "Gallery"
                        ? classes.buttonSelected
                        : classes.button
                    }
                  >
                    Gallery View
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={descViewHandler}
                    variant="contained"
                    className={
                      viewKind === "Description"
                        ? classes.buttonSelected
                        : classes.button
                    }
                  >
                    Description
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={scrollViewHandler}
                    variant="contained"
                    className={
                      viewKind === "Scroll"
                        ? classes.buttonSelected
                        : classes.button
                    }
                  >
                    Scroll View
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div style={{ padding: "15px", backgroundColor: "#efe6dc" }}>
          {viewHandler()}
        </div>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            A Project by Rahul Terwankar & Aniruddha Ingle
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Beauty surrounds you if you have the time to look around you. Take a
            moment to enjoy the life within and outside of yourself.
          </Typography>
        </footer>
      </main>
    </React.Fragment>
  );
};

export default App;
