import React, { useState } from 'react';
import axios from "axios";
import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "35%",
    height: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    marginLeft: "30%"
  },
}));

export default function PasswordEmail() {
 
  const [confirmEmail, setConfirmEmail] = useState(false)
  const [email, setEmail] = useState("")
  const classes = useStyles();

// fonction pour verifier le mail 
  const confirmation = async () => {
    try {
      // dans une requete get axios on ne peut pas envoyer de body
      const mail = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/verify`, { email },
        {
          withCredentials: true,
        }
      )
      if (mail.data) {
        setConfirmEmail(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (confirmEmail == false) {


    return (

      <div>

        <h2 style={{ textAlign: "center" }}>Confirmer votre email</h2>
        
        <TextField
          placeholder="email"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
        />


        <Button onClick={(e) => confirmation(e)} className={classes.button} type="button">ENVOYER</Button>

        
      </div>
    )
  } else {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>un lien vous a été envoyer par mail pour modifier votre mot de passe</h3>
      </div>
    )
  }

}