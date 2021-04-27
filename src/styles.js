import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sheet: {
    backgroundColor: "#e1d5c9",
  },
  toolbar: {
    color: "#27201a",
    backgroundColor: "#e1d5c9",
    borderColor: "#bc8c61",
  },
  icon: {
    marginRight: "20px",
  },
  container: {
    background: "linear-gradient(45deg, #cbab89 70%, #bc8c61 100%)",
    padding: "50px",
  },
  buttons: {
    marginTop: "40px",
  },
  button: {
    color: "#27201a",
    backgroundColor: "#e1d5c9",
  },
  buttonSelected: {
    color: "#27201a",
    backgroundColor: "#d1b094",
  },
  buttonCard: {
    color: "#27201a",
    border: "1px solid black",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#efe6dc",
    borderColor: "#bc8c61",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9 ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#efe6dc",
    padding: "50px 0",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #cbab89 70%, #bc8c61 100%)",
  },
}));

export default useStyles;
