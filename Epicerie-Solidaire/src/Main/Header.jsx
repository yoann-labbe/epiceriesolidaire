// BARRE DE NAV


import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


export default function Header(props) {
  const history = useHistory()
  const [cookies, setCookies, removeCookies] = useCookies(["token"])
  const tokens = cookies.token
  const [connected, setConnected] = useState(false)
// pour modifier la nave barre pour affficher profil et deconnexion
  useEffect(async () => {
    try {

      if (tokens) {
        setConnected(true)
        props.under("go")

      }
    } catch (error) {
      console.log(error)


    }
  }, [])
  const logout = async () => {
    removeCookies("token", { path: "/" })

  }
  if (connected === true) {
    return (
      <div>
        
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "-25px" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img
              src={"/Logo_plants.png"}
              alt="Logo Myflowerlife"
              style={{ width: "200px", height: "55px", marginLeft: "20px" }}
              href="/home"
            />
          </Link>

          <Button startIcon={<HomeIcon />} style={{ fontSize: "large", color: "#4C9A62" }} href="/home">ACCUEIL</Button>
          <Button startIcon={<PersonIcon />} style={{ fontSize: "large", color: "#4C9A62", marginTop: "10px", height: "35px", width: "12%" }} href="/inscription">INSCRIPTION</Button>
          <Button style={{ fontSize: "large", color: "#4C9A62"}} onClick={logout} href="/connexion">Deconnexion</Button>
          <Button style={{ fontSize: "large", color: "#4C9A62" }} href="/profil">Profil</Button>



        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ backgroundColor: "" , display: "flex", justifyContent: "space-around", marginBottom: "-25px" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img
              src={""}
              alt="LOGO"
              style={{ width: "200px", height: "55px", marginLeft: "20px" }}
              href="/home"
            />
          </Link>

          <Button startIcon={<HomeIcon />} style={{ fontSize: "large", color: "#EE2A7B" }} href="/home">ACCUEIL</Button>
          <Button startIcon={<PersonIcon />} style={{ fontSize: "large", color: "#EE2A7B", borderRadius: "45px", border: "none", marginTop: "10px", height: "35px", width: "12%"}} href="/inscription">INSCRIPTION</Button>
          <Button style={{ fontSize: "large", color: "#EE2A7B" }} href="/connexion">CONNEXION</Button>




        </div>
      </div>
    );
  }

}
