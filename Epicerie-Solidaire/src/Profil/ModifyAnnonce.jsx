import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Typography, Grid, TextField, makeStyles, Button } from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/system";


export default function ModifyAnnonce(props) {
    const [info, setInfo] = useState([]);
    const photos = info.photoA;
    const { id } = useParams();

    useEffect(async () => {
        try {
            const description = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/find/${id}`, {
                withCredentials: true,
            });
            if (
                description.data
            ) {

                setInfo(description.data);
            } else {
                console.log("probleme")
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            {console.log(info)}
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
                // onChange={handleChange("title")}
                // defaultValue={values.title}
                value={info.title}
                variant="outlined"

                fullWidth
              />
            </Grid>
            <br />
            <br />
            <div>
              <FormControl>
                <InputLabel id="demo-simple-select-autowidth-label">Catégorie: {info.category}</InputLabel>
                <Select
                  style={{ width: "395px" }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                //   defaultValue={info.category}
                //   onChange={handleChange("category")}
                value={info.category}
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
                //   onChange={handleChange("stock")}
                //   defaultValue={values.stock}
                value={info.stock}
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
                //   onChange={handleChange("validity")}
                //   defaultValue={values.validity}
                value={info.validity}
                  fullWidth
                />
              </Grid>
              <br />
              <br />
            </div>


            <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">Votre végétal est-il dans un pot ? {info.flowerPot} </InputLabel>
            <Select
              style={{ width: "395px" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
            //   defaultValue={values.flowerPot}
            //   onChange={handleChange("flowerPot")}
            value={info.flowerPot}
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
            <InputLabel id="demo-simple-select-autowidth-label">Voulez-vous proposez le service de livraion ? {info.delivery}</InputLabel>
            <Select
              style={{ width: "395px" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
            //   defaultValue={values.delivery}
            //   onChange={handleChange("delivery")}
            value={info.delivery}
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
            //   onChange={handleChange("priceOrigin")}
            //   defaultValue={values.priceOrigin}
            value={info.priceOrigin}
              fullWidth
            />
          </Grid>
          <br />
          
          {/* téléphone */}
          <Grid item xs={12}>
            <TextField
              placeholder="Prix définitif"
              label="Prix définitif"
              variant="outlined"
            //   onChange={handleChange("priceWanted")}
            //   defaultValue={values.priceWanted}
            value={info.priceWanted}
              fullWidth
            />
            <br />
            <br />

             <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ height: "150px", widht: "300px" }}
            id="outlined-multiline-static"
            label="Description du végétal"
            placeholder="Facultatif"
            multiline
            rows={6}
            // defaultValue={values.description}
            // onChange={handleChange("description")}
            variant="outlined"
            value={info.description}
          />
        </Box>
          </Grid>
          </form>
        </div>
      </Container>

        </div>
    )
}