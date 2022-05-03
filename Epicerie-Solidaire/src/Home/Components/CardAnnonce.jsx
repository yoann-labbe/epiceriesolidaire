import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
    root: {
        width: 325,
        heigth: 600,
        margin: 30,
      },

    content: {
        backgroundColor: "#F5F5F5",
        height: 80,

    },
    
    image: {
        width: "600px",
        maxWidth: "100%",
        maxHeight: 230,
        minHeight: 200,
        display: "flex",
        justifyContent: "center",
        margin: "auto",
    },
    title: {
        color: "#4C9A62",
        fontWeight: "bold",
        fontSize: "50px",
        textAlign: "center",
        marginBottom: 6,
      },

    price: {
        color: "black",
        textAlign: "center",
        fontSize: "25px",
        marginTop: "50px"
    },
    delivery: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "5px",
      border: "",
      marginLeft: "10px",
      height: 20,
      width: "30%",
      borderRadius: "45px",
      backgroundColor: "#FFF752",
    },
    ville: {
      display: "flex",
      justifyContent: "",
      paddingTop: "5px",
      border: "",
      marginLeft: "10px",
      paddingLeft:'10px',
      height: 20,
      width: "40%",
      borderRadius: "45px",
      backgroundColor: "#FFF752",
    }
});

export default function CardAnnonce(props) {

    const classes = useStyles();
    const photos = props.photoA;
    return (
    
    <div>
 
    <Card className={classes.root}>
  
      <CardActionArea>
      <p className={classes.ville}>
          {props.country}
          </p>
          <p className={classes.delivery}>
            Livraison : {props.delivery}
          </p>
        <div className={classes.contain}>
          <img
            className={classes.image}
            src={
              props.photoA && photos.length > 0
                ? photos[0]
                : "/flower.png"
            }
          />
        </div>
        <CardContent className={classes.content}>
          <Typography  className={classes.title}>
            {props.title}
          </Typography>
          <Typography className={classes.price}>
            Prix : {props.priceWanted} €
          </Typography>
          <button style={{border:"none"}} onClick={() => props.suppAnnonce(props.id)}>
          <DeleteIcon  />
          </button>
        </CardContent>
      </CardActionArea>
        </Card> 
     
        </div>
    );
}

