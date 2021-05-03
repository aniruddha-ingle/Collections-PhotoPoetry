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
import Description from "./components/Description";
import ScrollView from "./components/ScrollView";
import Images from "./images/index"

const App = () => {
  const cards = [
    { id: 1, title: "The Flower", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_1},
    { id: 2, title: "Moon & Stars", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_2},
    { id: 3, title: "Beauty & The Beast", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_3},
    { id: 4, title: "Live, Laugh.", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_4},
    { id: 5, title: "Fighter", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_5},
    { id: 6, title: "Amnesty", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_6},
    { id: 7, title: "Clement", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_7},
    { id: 8, title: "Tumult", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_8},
    { id: 9, title: "Bite.", poem: ["Placeholder for Poem Number: "], about: ["This is about Photo Number: "], image: Images.img_9},
  ];

  const classes = useStyles();
  const [viewKind, setViewKind] = useState("Description");
  const galleryViewHandler = () => {
      setViewKind("Gallery");
    }
  const descViewHandler = () => {
    setViewKind("Description");
  }
  const scrollViewHandler = () => {
    setViewKind("Scroll");
  }
  const viewHandler = () => {
    if(viewKind === "Gallery") return <GalleryView cards={cards} />
    else if (viewKind === "Scroll") return <ScrollView cards={cards} />
    else if (viewKind === "Description") return <Description/>
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
                  <Button onClick={descViewHandler} variant="contained" className={viewKind==="Description" ? classes.buttonSelected : classes.button}>
                    Description
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
        <div style={{padding:"30px", backgroundColor:"#efe6dc"}}>
          {viewHandler()}
        </div>
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
      </main>
    </React.Fragment>
  );
};

export default App;
