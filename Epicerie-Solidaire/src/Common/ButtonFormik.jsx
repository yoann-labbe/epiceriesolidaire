// Bouton utilser dans pour la partie Connexion

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "45px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "13%",
    height: "50px",
    border: "none",
    outline: "none",
    shadow: "none",
    marginTop: "20px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#FFFFFF",
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
