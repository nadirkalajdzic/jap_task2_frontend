import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "black",
    },
    width: 150,
    padding: "10px",
    backgroundColor: "var(--button-color)",
    color: "#ffffff",
    borderColor: "var(--button-color)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px 4px 4px 4px",
    fontWeight: 700,
    fontSize: "12px",
    textAlign: "center",
  },
});

export default useStyle;
