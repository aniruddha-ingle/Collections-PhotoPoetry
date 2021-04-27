import { Typography } from "@material-ui/core";

const Poem = ({buttonId, cards}) => {
    return ( 
    <div>
        <Typography gutterBottom variant="h1"> {cards[buttonId]["title"]}</Typography>
        {cards[buttonId]["poem"].map((line) => (<Typography variant="h5">{line}</Typography>))}
    </div>
    );
}
export default Poem;