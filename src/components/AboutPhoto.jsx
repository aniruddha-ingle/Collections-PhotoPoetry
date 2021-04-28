import {Typography} from "@material-ui/core";
import nextId from "react-id-generator";
const AboutPhoto = ({buttonId, cards }) => {
    return ( 
        <div>
            <Typography gutterBottom variant="h1"> About: {cards[buttonId]["title"]}</Typography>
            {cards[buttonId]["about"].map((line) => (<Typography key={nextId()} variant="h5">{line + cards[buttonId].id}</Typography>))}
        </div>
    );
}
 
export default AboutPhoto;