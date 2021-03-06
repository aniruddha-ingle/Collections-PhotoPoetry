import { Typography } from "@material-ui/core";
import nextId from "react-id-generator";

const Poem = ({ buttonId, cards }) => {
  console.log(buttonId);
  return (
    <div>
      <Typography gutterBottom variant="h1">
        {" "}
        {cards[buttonId]["title"]}
      </Typography>
      {cards[buttonId]["poem"].map((line) => (
        <Typography gutterBottom key={nextId()} variant="h5">
          {line}
        </Typography>
      ))}
    </div>
  );
};
export default Poem;
