import React from "react";
import {
  Typography,
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
                <br/>
                <Typography gutterBottom
                variant="subtitle1"
                align="center"
                color="textSecondary"
                >
                This project documents a typical trip to the mountains that is undertaken by many Indian students in their college days. 
                Manali, Nainital, Kasol, or Dharamshala are a few of the favourite desinations. On these trips, many experiences enlightened our understanding of the beauty within ourselves and the marvel that surrounds us.
                But the most invaluable gift that the mountains have given us are some of our best friendships being forged, tested, and rejoiced in the blurry, snowy nights.
                 
                </Typography>
                <br/>
                <Typography gutterBottom
                variant="subtitle1"
                align="center"
                color="textPrimary"
                >
                We would like to take this opportunity to dedicate a message to these special friendships.
                </Typography>
                <br/>
                <Typography
                gutterBottom
                variant="subtitle1"
                align="center"
                color="textSecondary"
                >
                There have been many problems, many encounters with discomfort, and many glimpses of the demons that each one of us holds within our existence.
                However, through it all, we have managed to solve the problems, romantacise the discomfort, and befriend each other's demons. The memories that were made, the love that was shared,
                and the jokes that made us roar with laughter - will be the warm hug in the cold nights of our old age. We did youth right, oh, boy did we do it right!
                </Typography>
            </Container>
            <br/>
        </div>
     );
}
 
export default Description;