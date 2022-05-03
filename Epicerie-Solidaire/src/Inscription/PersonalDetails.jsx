// Première page de l'inscription

import React from 'react'
import { Container, Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "25px",
    marginBottom: "50%",
  },
  theme: {
    backgroundColor: "yellow",
    color: "red",
  },
}))

export default function PersonalDetails({ prevStep, nextStep, handleChange, values }) {

  const classes = useStyles();

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px", color:"#D5D82C"  }}>
          Vous y êtes presque
        </Typography>
        <form>
          <br />
          <br />
          <Grid>
            {/* adresse */}

            {/* <Grid item xs={12}>
              <TextField
                placeholder="Adresse"
                label="Adresse"
                variant="outlined"
                onChange={handleChange('address')}
                defaultValue={values.address}
                fullWidth
                data-tip="Merci d'indiquer votre adresse, afin de recevoir/envoyer des végétaux"
                data-event='click focus'

              />
            </Grid> */}
            <div className={classes.theme} >
              <ReactTooltip globalEventOff='click' type="warning" place="top-end" />
            </div>
            <br />
            <br />
            {/* code postal */}
            <Grid item xs={12}>
              <TextField
                placeholder="Code postal"
                label="Code postal"
                variant="outlined"
                onChange={handleChange('cp')}
                defaultValue={values.cp}
                fullWidth
              />
            </Grid>
            <br />
            <br />
            {/* ville */}
            <Grid item xs={12}>
              <TextField
                placeholder="Ville"
                label="Ville"
                variant="outlined"
                onChange={handleChange('country')}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
              />
            </Grid>
            <br />
            <br />
            {/* téléphone */}
            <Grid item xs={12}>
              <TextField
                placeholder="Téléphone"
                label="Téléphone"
                variant="outlined"
                onChange={handleChange('phone')}
                defaultValue={values.phone}
                autoComplete="phone"
                fullWidth
                data-tip="Merci d'indiquer votre numéro de téléphone, pour le suivis de livraison"
                data-event='click focus'
              />
            </Grid>
            <ReactTooltip globalEventOff='click' type="warning" />
            <br />
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
                  onClick={Continue}
                  type="submit"
                  fullWidth
                  variant="contained"

                >
                  Suivant
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
