import Rating from "@material-ui/lab/Rating";

import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 300,
    boxShadow: "none",
    margin: "0 auto",
  },
  media: {
    height: 300,
    width: "100%",
    margin: "0 auto",
  },
  title: {
    fontWeight: 550,
    fontSize: 24,
    marginTop: 10,
    maxHeight: 80,
    height: 80,
    color: "var(--black-color)",
  },
  description: {
    color: "var(--grey-color)",
  },
  button: {
    borderColor: "var(--button-color)",
    borderWidth: 2,
    fontWeight: 500,
    color: "var(--button-color)",
  },
  align: {
    margin: "0 auto",
    display: "inherit",
    padding: 20,
  },
  ellipsis: {
    maxHeight: 80,
    height: 80,
  },
});

export const StyledRating = withStyles({
  iconFilled: {
    color: "var(--black-color)",
  },
})(Rating);
