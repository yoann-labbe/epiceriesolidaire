// Résumé de l'inscription, visualiser les infos avant validation

import React from 'react'
import { Grid, List, ListItem, ListItemText, Button, makeStyles, Typography, Container } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "20%",
    marginBottom: "15%",
  },
}))

export default function Confirmation({ prevStep, nextStep, values }) {

  const classes = useStyles();

  console.log(values);
  const { firstname, lastname, email, password, address, cp, country, phone } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
// fonction pour creer un utilisateur 
  const handleConnection = async (values) => {
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/`, {
        firstname, lastname, email, password, address, cp, country, phone
      }, { withCredentials: true, });
      return response.data
    } catch (error) {
      console.error(error)
      return false
    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <div style={{}}>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px", color: "#D5D82C" }}>
          Résumé de votre profil
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Prénom :" secondary={firstname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Nom :" secondary={lastname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email :" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mot de passe :" secondary={password} />
          </ListItem>
          {/* <ListItem>
            <ListItemText primary="Adresse :" secondary={address} />
          </ListItem> */}
          <ListItem>
            <ListItemText primary="Code postal :" secondary={cp} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ville :" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Téléphone :" secondary={phone} />
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              className={classes.button}
              onClick={Previous}
              type="submit"
              fullWidth
              variant="contained"

            >
              Précédent
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              className={classes.button}
              onClick={(e) => { handleConnection(); Continue(e) }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Validez
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

