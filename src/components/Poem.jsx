import { Typography } from "@material-ui/core";
import nextId from "react-id-generator";

const Poem = ({buttonId, cards}) => {
    console.log(buttonId)
    return ( 
        <div>
            <Typography gutterBottom variant="h1"> {cards[buttonId]["title"]}</Typography>
            {cards[buttonId]["poem"].map((line) => (<Typography key={nextId()} variant="h5">{line + cards[buttonId].id}</Typography>))}
        </div>
    );
}
export default Poem;
