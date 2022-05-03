// Page 404

import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  back: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "20%",
    height: "50px",
    marginTop: "30%",
    marginLeft: "10%",
    zIndex: 1,
    position: "absolute",
    
  },

  redirect: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  logo: {
    // top: 0,
    // left: 0,
    minWidth: "auto",
    minHeight :"auto",
  },
}));

export default function NotFound() {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  const classes = useStyles();
  return (
    <div >
      <div className={classes.redirect} onClick={redirectToHome}>
      <Button className={classes.back} >PLANT&FLOWER</Button>
      <img className={classes.logo} src="/Erreur_404.png" alt="Erreur 404" />


      </div>
    </div>
  );
}


