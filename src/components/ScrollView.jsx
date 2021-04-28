import React from 'react';
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
    createMuiTheme
} from "@material-ui/core";
import useStyles from "../styles";
const ScrollView = ({cards}) => {
    const classes = useStyles();
    return ( 
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card.id}>
                    <Card className={classes.card} className={classes.cardHolder}>
                    <Typography
                        style={{ textAlign: "center" }}
                        variant="h2"
                        gutterBottom
                        >
                        {card.title}
                    </Typography>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography style={{ textAlign: "center" }} variant="h6">
                        This is a media card.<br/> 
                        This will be used to create a post
                        for Rahul's Images. This is a media card. This will be
                        used to create a post for Rahul's Images.
                        </Typography>
                    </CardContent>
                    </Card>
                    <br/>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}
 
export default ScrollView;