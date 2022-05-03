// Première page de l'annonce, qui permet  de récuperer les premières infos.

import React from 'react';
import { Container, Typography, Grid, TextField, makeStyles, Button } from '@material-ui/core'
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
    marginLeft: "50px",
    marginBottom: "40px",

  },
}))


export default function AnnonceDetails({ handleChange, nextStep, values }) {

  const classes = useStyles();


  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px" }}>
            Ajoutez une nouvelle annonce
          </Typography>
          <form>
            <br />
            <br />
            {/* title */}
            <Grid item xs={12}>
              <TextField
                placeholder="Titre de votre annonce"
                label="Titre de votre annonce"
                onChange={handleChange("title")}
                defaultValue={values.title}
                variant="outlined"

                fullWidth
              />
            </Grid>
            <br />
            <br />
            <div>
              <FormControl>
                <InputLabel id="demo-simple-select-autowidth-label">Catégorie</InputLabel>
                <Select
                  style={{ width: "395px" }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  defaultValue={values.category}
                  onChange={handleChange("category")}
                  autoWidth
                  label="Catégorie"
                >
                  {/* <MenuItem value="">
            <em>None</em> 
          </MenuItem>*/}
                  <MenuItem value={"Plantes d'intérieur"}>Plantes d'intérieur</MenuItem><br />
                  <MenuItem value={"Cactus et plantes d'extérieur"}>Cactus et plantes d'extérieur</MenuItem><br />
                  <MenuItem value={"Potager et arbres fruitiers"}>Potager et arbres fruitiers</MenuItem><br />
                  <MenuItem value={"Plantes carnivores"}>Plantes carnivores</MenuItem><br />
                  <MenuItem value={"Graines et bulbes"}>Graines et bulbes</MenuItem><br />
                  <MenuItem value={"Plantes d'extérieur"}>Plantes d'extérieur</MenuItem><br />
                  <MenuItem value={"Autres plante"}>Autres plante</MenuItem><br />
                  <MenuItem value={"Accéssoires"}>Accéssoires</MenuItem><br />
                </Select>
              </FormControl>
              <br />
              <br />
              <br />
              <Grid item xs={12}>
                <TextField
                  placeholder="Stock"
                  label="Stock"
                  variant="outlined"
                  onChange={handleChange("stock")}
                  defaultValue={values.stock}
                  fullWidth
                />
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <TextField
                  placeholder="Validité de l'annonce"
                  label="Validité de l'annonce"
                  variant="outlined"
                  onChange={handleChange("validity")}
                  defaultValue={values.validity}
                  fullWidth
                />
              </Grid>
              <br />
              <br />
            </div>


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
    </div>
  );
}