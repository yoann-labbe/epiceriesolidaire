// Fin série de question pour l'inscription

import React from 'react'

import { Container, Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "50px",
    marginBottom: "40px",

  },
}))

export default function UserDetails({ nextStep, handleChange, values }) {

  const classes = useStyles();

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px", color:"#D5D82C" }}>
          Faisons connaissance
        </Typography>
        <form>
          <br />
          <br />
          {/* prénom */}
          <Grid item xs={12}>
            <TextField
              placeholder="Prénom *"
              label="Prénom *"
              onChange={handleChange('firstname')}
              defaultValue={values.firstname}
              variant="outlined"
              autoComplete="firstname"
              fullWidth
            />
          </Grid>
          <br />
          <br />
          {/* nom */}
          <Grid item xs={12}>
            <TextField
              placeholder="Nom *"
              label="Nom *"
              onChange={handleChange('lastname')}
              defaultValue={values.lastname}
              variant="outlined"
              autoComplete="lastname"
              fullWidth
            />
          </Grid>
          <br />
          <br />
          <Grid >
            {/* email */}
            <Grid item xs={12}>
              <TextField
                placeholder="Email * "
                label="Email * "
                onChange={handleChange('email')}
                defaultValue={values.email}
                variant="outlined"
                autoComplete="email"
                fullWidth
              />
            </Grid>
            <br />
            <br />
            {/* password */}
            <Grid item xs={12}>
              <TextField
                placeholder="Mot de passe *"
                label="Mot de passe *"
                onChange={handleChange('password')}
                defaultValue={values.password}
                variant="outlined"
                autoComplete="password"
                fullWidth
                type="password"
              />
            </Grid>
            <br />
            <br />
          </Grid>
          <br />
          <Button
            className={classes.button}
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"

          >
            Suivant
          </Button>
        </form>
      </div>
    </Container>
  );
}

