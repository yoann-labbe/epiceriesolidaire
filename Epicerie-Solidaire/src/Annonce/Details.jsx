// Suite de récupération des infos pour l'annonce

import React, { useState } from 'react'
import { Container, Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import PopupDetails from './PopupDetails';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "25px",
    marginBottom: "50%",
  },
}))

export default function Details({ prevStep, handleChange, nextStep, values }) {
  const [stock, setStock] = useState("");
  const [validity, setValidity] = useState("");
  const [priceOrigin, setPriceOrigin] = useState("");
  const [priceWanted, setPriceWanted] = useState("");


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px" }}>
          Détails de l'annonce
        </Typography>
        <form>
          <br />
          <br />
          <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">Votre végétal est-il dans un pot ?</InputLabel>
            <Select
              style={{ width: "395px" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              defaultValue={values.flowerPot}
              onChange={handleChange("flowerPot")}
              autoWidth
              label="Votre végétal est-il dans un pot ?"
            >

              <MenuItem value={"oui"}>Oui</MenuItem><br />
              <MenuItem value={"non"}>Non</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          {/* validé */}
          <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">Voulez-vous proposez le service de livraion ?</InputLabel>
            <Select
              style={{ width: "395px" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              defaultValue={values.delivery}
              onChange={handleChange("delivery")}
              autoWidth
              label="Voulez-vous proposez le service de livraion ?"
            >

              <MenuItem value={"oui"}>Oui</MenuItem><br />
              <MenuItem value={"non"}>Non</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          {/* prix voulu */}
          <Grid item xs={12}>
            <TextField
              placeholder="Prix souhaité"
              label="Prix souhaité"
              variant="outlined"
              onChange={handleChange("priceOrigin")}
              defaultValue={values.priceOrigin}
              fullWidth
            />
          </Grid>
          <br />
          <br />
          {/* téléphone */}
          <Grid item xs={12}>
            <TextField
              placeholder="Prix définitif"
              label="Prix définitif"
              variant="outlined"
              onChange={handleChange("priceWanted")}
              defaultValue={values.priceWanted}
              fullWidth
            />
          </Grid>
          <br />

          <p style={{ marginLeft: 8, textDecoration: "underline" }} onClick={() => setOpen(true)}>Des questions vis-à-vis des frais appliqués au prix ?</p>
          <PopupDetails open={open} handleClose={handleClose} />


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

        </form>
      </div>
    </Container>
  )
}
