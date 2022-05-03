// Après avoir cliqué sur l'annonce en page d'acceuil, nous pouvons visualiser l'annonce sur une autre page

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "25px",
        backgroundColor: "#33FF93",
        color: "black",
        width: "75%",
        height: "50px",
        marginLeft: "40px",
        marginBottom: "40px",
        marginTop: 15,
        
    },
    root: {
        width: 300,
        heigth: 600,
        margin: 30,
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
      },

    content: {
        backgroundColor: "#F5F5F5",
        height: 110,

    },
    image: {
        textAlign: "center"
    }
}));

export default function Description() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const photos = info.photoA;
  const { id } = useParams();

  useEffect(async () => {
    try {
      const description = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/find/${id}`, {
        withCredentials: true,
      } );
if(
    description.data
){

      setInfo(description.data);
    }else{
        console.log("probleme")
    }} catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
        {console.log(id)}
        {console.log(info)}
  
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.contain}>
            <img
              className={classes.image}
              src={
                info.photoA && photos.length > 0 ? photos[0] : "/flower.png"
              }
            />
          </div>
          <CardContent className={classes.content}>
            <Typography className={classes.title}>Végétaux : {info.title}</Typography>
            <Typography className={classes.description}>Description : {info.description}</Typography>
            <Typography className={classes.price}>
              Prix : {info.priceWanted} €
            </Typography>
            <Typography className={classes.ville}>Ville : {info.country}</Typography>
            <Typography className={classes.delivery}>
              Livraison : {info.delivery}
            </Typography>
          </CardContent>
          <Button className={classes.button}>Acheter</Button>
        </CardActionArea>
      </Card>
    </div>
  );
}
