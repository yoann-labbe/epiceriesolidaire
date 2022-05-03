// Formulaire de contact

import React, { useState } from "react";

import { Button, Grid, TextField, makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    button: {
        borderRadius: "25px",
        backgroundColor: "#33FF93",
        color: "black",
        width: "30%",
        height: "50px",
        marginLeft: "35%",
        marginBottom: "100px",
        
    },
}))

export default function Formulaire(props) {
  const classes = useStyles();
  const [lastname, setLastname] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {
    setLastname(e.target.value);
    setFirstname(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between", marginLeft: "30px", marginRight: "170px", marginTop: "4%",fontFamily:"Lust Regular"}}>
      <div>
        <h1 style={{color: "#4C9A62"}}>Contactez-nous</h1>
        <p style={{marginTop: "50px", fontSize: "1.4em", textAlign: "justify"}}>
          Nous avons à coeur de vous offrir la meilleure expérience possible sur
          notre site.
        </p>
        <p style={{marginTop: "50px", fontSize: "1.4em", textAlign: "justify"}}>
          Si vous rencontrez des difficultés avec votre compte ou si vous avez
          des questions <br/> à propos de notre plateforme, n'hésitez pas à nous
          contacter.
        </p>
      </div>
      <Card style={{height: "700px", width: "500px", marginBottom: "50%", marginTop: "25px", boxShadow: "2px 2px 10px black", fontFamily:"Lust Regular"}}>
        <h3 style={{textAlign: "center", fontFamily: "Lust Regular", color: "#33FF93", fontSize: "1.4em"}}>Envoyez-nous un message</h3>
        <div>
          <Grid style={{marginLeft: "25px",marginBottom: "30px", width: "1050px", marginTop: "40px"}}>
            <Grid item xs={12} sm={5}>
              <TextField
                placeholder="Nom"
                label="Nom"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                autoComplete="lastname"
                fullWidth
              />
            </Grid>
            </Grid>
            <Grid style={{marginLeft: "25px",marginBottom: "15px", width: "1050px", marginTop: "40px"}}>
            <Grid item xs={12} sm={5}>
              <TextField
                placeholder="Prénom"
                label="Prénom"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                autoComplete="firstname"
                fullWidth
              />
            </Grid>
            </Grid>
          <br/>
          <Grid>
            {/* email */}
            <Grid style={{marginLeft: "25px",marginBottom: "30px", width: "1050px", marginTop: "10px"}}>
            <Grid item xs={12} sm={5}>
              <TextField
                placeholder="Email "
                label="Email "
                onChange={(e) => handleChange(e)}
                variant="outlined"
                autoComplete="email"
                fullWidth
              />
            </Grid>
            </Grid>
            <br />
            <TextField
              style={{ height: "200px", width: "435px", maxHeight: "auto", marginLeft: "25px", marginTop: "5px"}}
              id="outlined-multiline-static"
              label="Votre message"
              multiline
              rows={8}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              
              
            />
          </Grid>
          <br/>
          <Button
            className={classes.button}
            
            type="submit"
            fullWidth
            variant="contained"
          >
            Envoyez
          </Button>
        </div>
      </Card>
    </div>
  );
}
