// Page décrivant la description de l'annonce et l'ajout de la photo


import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import ImagesUpload from "./ImagesUpload";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "25px",
    marginBottom: "50%",
  },
});

export default function PictureDetails({ prevStep, nextStep, handleChange, values }) {
  const classes = useStyles();
  const [name, setName] = useState({
    pictureUrl: "",
    videoUrl: "",
    text: "",
  });
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };




  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div>
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
            defaultValue={values.description}
            onChange={handleChange("description")}
            variant="outlined"
          />
        </Box>
      </div>
      <br />
      <br />
      <ImagesUpload />
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
    </div>

  );
}
