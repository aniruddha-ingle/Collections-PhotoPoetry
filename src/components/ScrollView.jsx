import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import useStyles from "../styles";
import nextId from "react-id-generator";

const ScrollView = ({ cards }) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      body1: {
        fontSize: 20,
        fontFamily: "sans-serif",
      },
    },
  });

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.id}>
            <Card className={classes.cardHolder}>
              <Typography
                style={{ backgroundColor: "#d2bfad", textAlign: "center" }}
                variant="h2"
                gutterBottom
              >
                {card.title}
              </Typography>
              <CardMedia className={classes.cardMedia} image={card.image} />
              <br />
              <CardContent className={classes.cardContent}>
                {card["poem"].map((line) => (
                  <div>
                    <ThemeProvider theme={theme}>
                      <Typography
                        style={{ color: "#594127", textAlign: "center" }}
                        key={nextId()}
                        variant="body1"
                        theme={theme}
                      >
                        {line}
                      </Typography>
                    </ThemeProvider>
                  </div>
                ))}
              </CardContent>
            </Card>
            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ScrollView;
