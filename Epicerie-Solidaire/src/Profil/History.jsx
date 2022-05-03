// Onglet du profil de l'utilisateur, ce dernier peut visualiser l'historique des dernières commandes

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
  h1: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
    marginBottom: "35px",
  },

});

export default function History() {
  const classes = useStyles();
  const [listAnnounce, setListAnnounce] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}annonce`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((data) => setListAnnounce(data?.todayCreatedAt));
  }, []);

  return (
    <div>
      <div className={classes.h1}>
        <h1>Historique des commandes</h1>
      </div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow style={{ color: "#ffff", backgroundColor: "#FFF752" }}>
              <TableCell>Nom de l'annonce</TableCell>
              <TableCell>Catégorie</TableCell>
              <TableCell>Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listAnnounce

              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.priceWanted}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}

