// Barre de recherche

import { Button, Card, TextField } from '@mui/material';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SearchIcon from '@mui/icons-material/Search';



const useStyles = makeStyles((theme) => ({
  search: {
    marginLeft: "12%",
    width: "75%",
    height: "50px",
    borderRadius: "5px",
    marginBottom: "30px",
    marginTop: "35px",
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "12%",
    marginBottom: "10px",
  },
}));

export default function Search({ onChange, plante, searchValue }) {
  const classes = useStyles();
  return (

    <div>
      <Card style={{ height: "100%", width: "100%", display: "", }}>
        <Card style={{ height: "200px", width: "450px", marginLeft: "150px", marginTop: "200px", display: "flex", flexDirection: "column", position: "absolute" }}>
          <div style={{ height: "25px", width: "25px", marginLeft: "350px", marginTop: "50px", position: "absolute" }}>
            <SearchIcon />
          </div>
          <TextField
            className={classes.search}
            value={searchValue}
            type="text"
            placeholder="Recherchez"
            onChange={onChange}
          />
          <Button className={classes.button} onClick={plante} >RECHERCHER</Button>
        </Card>

        <div>


        </div>
      </Card>
    </div>


  );
}

