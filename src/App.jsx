import React, {useState} from "react";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import GalleryView from "./components/GalleryView";

const App = () => {
  const cards = [
    { id: 1, title: "The Flower", poem: ["The beauty in her eyes is worth the pain,", "Who wins my heart? My little Flower!"], about: ["This is about the image 1"]},
    { id: 2, title: "Moon & Stars", poem: ["Hey", "I Found Love!"], about: ["This is about the image 2"] },
    { id: 3, title: "Beauty & The Beast", poem: ["Hey", "I Found Love!"], about: ["This is about the image 3"] },
    { id: 4, title: "Live, Laugh.", poem: ["Hey", "I Found Love!"], about: ["This is about the image 4"] },
    { id: 5, title: "Fighter", poem: ["Hey", "I Found Love!"], about: ["This is about the image 5"] },
    { id: 6, title: "Amnesty", poem: ["Hey", "I Found Love!"], about: ["This is about the image 6"] },
    { id: 7, title: "Clement", poem: ["Hey", "I Found Love!"], about: ["This is about the image 7"] },
    { id: 8, title: "Tumult", poem: ["Hey", "I Found Love!"], about: ["This is about the image 8"] },
    { id: 9, title: "Bite.", poem: ["Hey", "I Found Love!"], about: ["This is about the image 9"] },
  ];

  const classes = useStyles();
  const [viewKind, setViewKind] = useState("");
  const galleryViewHandler = () => {
      setViewKind("Gallery");
    }
  const homeViewHandler = () => {
    setViewKind("");
  }
  const scrollViewHandler = () => {
    setViewKind("Scroll");
  }
  const viewHandler = () => {
    if(viewKind === "Gallery") return <GalleryView cards={cards} />
    else if (viewKind === "Scroll") return <Typography align="center" variant="h1">Scroll View</Typography>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          -
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Through the Looking Glass</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.sheet}>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography variant="h1" align="center" color="textPrimary">
              {"C O L L E C T I O N S"}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              With Love by Rahul Terwankar
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
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={galleryViewHandler} variant="contained" className={viewKind==="Gallery"? classes.buttonSelected : classes.button}>
                    Gallery View
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={homeViewHandler} variant="contained" className={viewKind==="" ? classes.buttonSelected : classes.button}>
                    Home Page
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={scrollViewHandler} variant="contained" className={viewKind==="Scroll" ? classes.buttonSelected : classes.button}>
                    Scroll View
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {viewHandler()}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Project by Rahul Terwankar & Aniruddha Ingle
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
    </React.Fragment>
  );
};

export default App;
