// FOOTER

import { Card } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    
    display: "flex", 
    justifyContent: "space-around", 
    marginTop: "15px", 
    marginRight: "20px", 
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "auto",
    },
  },
  flowerlife: {
    
    display: "flex",
    flexDirection: "column",
  },
  decouvrir: {
    
    display: "flex",
    flexDirection: "column",

  },
  savoir: {
    
    display: "flex",
    flexDirection: "column",

  },


  }));


export default function Footer() {
  const classes = useStyles();
  return (
    <div>
     <Card style={{ backgroundColor: "#F5F5F5", position: "absolute", left: 0, right: 0 }}>
      <div className={classes.footer}>
      
          <div className={classes.flowerlife}>
            <h4>RESEAU D'ÉCHANGE</h4>
            <p></p>
            <div style={{display:"flex", justifyContent: "center"}}>
            <img
              style={{ width: "30px", height: "30px", marginRight: "15px" }}
              src={"/logo_fb.png"}
              alt="Logo FB"
            />
            <img
              style={{ width: "30px", height: "30px" }}
              src="/logo_insta.png"
              alt="Logo Insta"
            />
 
            </div>
          </div>
        
          <div className={classes.decouvrir}>
            <div style={{ fontFamily: "" }}> </div>
            <h4>DÉCOUVRIR</h4>
            <a style={{color: "#EE2A7B", textDecoration: "none", marginBottom: "15px"}} href="/" variant="text">
              Rechercher
            </a>
            <a style={{color: "#EE2A7B", textDecoration: "none", marginBottom: "15px"}} href="/connexion" variant="text">
              Connexion
            </a>
            <a style={{color: "#EE2A7B", textDecoration: "none", marginBottom: "15px"}} href="/inscription" variant="text">
              Inscription
            </a>
          </div>

        
          <div className={classes.savoir}>
            <h4>EN SAVOIR PLUS</h4>
            <a style={{color: "#EE2A7B", textDecoration: "none", marginBottom: "15px"}} href="/story" variant="text">
              Notre histoire
            </a>
        
          </div>
        
      </div>
      
      <div>
        <h6 style={{marginLeft: "15px", fontSize: "0.7em"}}>© 2021-2022 Tous droits réservés — ÉPICERIE SOLIDAIRE</h6>
        
      </div>
    </Card>
    </div>
    
  );
}
