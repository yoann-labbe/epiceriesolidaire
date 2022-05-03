// Page de connexion

import { Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import * as Yup from "yup";

import FormFormik from "../Common/FormFormik";
import ConnectField from "./ConnectField";
import axios from "axios";
import UserContext from "../Context/UserContext";
import GoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";
import { useCookies } from 'react-cookie';
import PopupPassword from './PopupPassword';
import ButtonFormik from "../Common/ButtonFormik";





const useStyles = makeStyles((theme) => ({
  connect: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginTop: "45px",
  },
  click: {
    marginTop: "10px",
    marginBottom: "15px",
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#D5D82C",
    color: "black",
    width: "13%",
    height: "50px",
    marginTop: "2px",
    marginBottom: "10px",
    marginRight: "10px",
    marginLeft: "20px"
  },
}));
export default function Connexion(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Veuillez saisir votre adresse mail"),
    password: Yup.string().required("Veuillez saisir votre mot de passe"),
  });


  const { connectedUser, setConnectedUser } = useContext(UserContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  // creation d'un cookie
  const [cookies, setCookies] = useCookies(["token"])
  const expiredAt = 60
  // fonction pour se connecter 
  const handleConnection = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/login`, values, {
        withCredentials: true,
      })

      if (response.data) {
        // pour qu'il expire apres 1h
        let date = new Date();
        date.setTime(date.getTime() + (expiredAt * 60 * 1000));
        // on va mettre le token dans le cookie pour verifier si la personne est connecté a chaque fois dans tout le site 
        setCookies("token", response.data.token, { path: "/", expires: date })
        props.connect(true)
        history.push("/")

      }


    } catch (error) {
      console.log(error)
    }

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.connect}>

      <div>
        <img style={{ width: "100px", height: "100px" }} src={""} alt="" />
      </div>
      <FormFormik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleConnection}
      >
        <h1 style={{color:"#D5D82C"}}>Connexion</h1>
        <ConnectField name="email" type="email" placeholder="Email" />
        <ConnectField name="password" type="password" placeholder="Mot de passe" />
        <ButtonFormik style={{ width: "13%", height: "50px" }} title="Connexion" type="button" />
        <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", marginTop: "2%", marginBottom: "4%", paddingRight: 5 }}>
          <Button className={classes.button} href="/inscription">Pas encore inscrit</Button>
          <PopupPassword open={open} handleClose={handleClose} />

        </Grid>
      </FormFormik>

    </div>

  );
}
