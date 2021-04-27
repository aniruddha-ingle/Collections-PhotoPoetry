import React, { useState } from 'react';
import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Container,
    Backdrop
} from "@material-ui/core";
import useStyles from "../styles";
import Poem from './Poem';

const cards = [
    { id: 1, title: "The Flower", 
    poem: 
    ["The beauty in her eyes were worth the pain,", 
    "Very little to lose much to gain,",
    "Who sings like a daisy and shines like a sunflower",
    "Who wins my heart? My little Flower!"] 
    },
    { id: 2, title: "Moon & Stars", poem: ["Hey", "I Found Love!"] },
    { id: 3, title: "Beauty & The Beast", poem: ["Hey", "I Found Love!"] },
    { id: 4, title: "Live, Laugh.", poem: ["Hey", "I Found Love!"] },
    { id: 5, title: "Fighter", poem: ["Hey", "I Found Love!"] },
    { id: 6, title: "Amnesty", poem: ["Hey", "I Found Love!"] },
    { id: 7, title: "Clement", poem: ["Hey", "I Found Love!"] },
    { id: 8, title: "Tumult", poem: ["Hey", "I Found Love!"] },
    { id: 9, title: "Bite.", poem: ["Hey", "I Found Love!"] },
  ];

const GalleryView = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [buttonId, setbuttonId] = useState(0);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = (e) => {
      const id = e.currentTarget.id;
      setbuttonId(id-1);
      setOpen(!open);
    };
    return ( 
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h6"
                      gutterBottom
                    >
                      {card.title}
                    </Typography>
                    <Typography style={{ textAlign: "center" }} variant="body2">
                      This is a media card. This will be used to create a post
                      for Rahul's Images. This is a media card. This will be
                      used to create a post for Rahul's Images.
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
                      style={{ marginRight: "30px" }}
                      className={classes.buttonCard}
                      size="small"
                      onClick={handleToggle}
                    >
                      Read Poem
                    </Button>
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <Poem buttonId={buttonId} cards={cards}></Poem>
                    </Backdrop>
                    <Button
                      style={{ marginLeft: "30px" }}
                      className={classes.buttonCard}
                      size="small"
                      color="primary"
                    >
                      About Photo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
     );
}
 
export default GalleryView;