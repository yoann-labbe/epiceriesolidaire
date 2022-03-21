import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "45px",
    backgroundColor: "#cf9f25",
    color: "white",
    width: "225px",
    height: "45px",
    border: "none",
    outline: "none",
    shadow: "none",
    marginTop: "70px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#FFC93C",
    },
  },
}));

export default function ButtonFormik({ title }) {
  const classes = useStyles();
  const { handleSubmit } = useFormikContext();

  return (
    <button className={classes.button} onClick={handleSubmit}>
      {title}
    </button>
  );
}
