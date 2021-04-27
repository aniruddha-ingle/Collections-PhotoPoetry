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

const cards = [
    { id: 1, title: "The Flower" },
    { id: 2, title: "Moon & Stars" },
    { id: 3, title: "Beauty & The Beast" },
    { id: 4, title: "Live, Laugh." },
    { id: 5, title: "Fighter" },
    { id: 6, title: "Amnesty" },
    { id: 7, title: "Clement" },
    { id: 8, title: "Tumult" },
    { id: 9, title: "Bite." },
  ];

const GalleryView = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
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
                      gutterbottom
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
                      style={{ marginRight: "30px" }}
                      className={classes.buttonCard}
                      size="small"
                      onClick={handleToggle}
                    >
                      Read Poem
                    </Button>
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <Typography variant="h1" color="inherit">Hello There!{card.title}</Typography>
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