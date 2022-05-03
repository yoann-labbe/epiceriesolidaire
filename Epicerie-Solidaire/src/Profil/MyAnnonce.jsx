// Onglet du profil de l'utilisateur, ce dernier peut visualiser ces annonces publiées

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Carousel from "react-elastic-carousel";
import Card from '../Home/Components/CardAnnonce';
import { makeStyles } from '@mui/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  delete: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "",
    height: "",
    marginLeft: "12%",
    marginBottom: "",

  },

}));


export default function MyAnnonce(props) {
  const [cookies, setCookies] = useCookies(["token"])
  const token = cookies.token
  const [announcement, setAnnouncement] = useState([]);
  const [check, setCheck] = useState(false);
  const classes = useStyles();

  useEffect(async () => {
    try {
      // recuperer les annonces de l'utilisateur 
      const ads = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/get`, { headers: { Authorization: `Bearer ${token}` } }, {
        withCredentials: true,
      })
      if (ads.data) {
        setAnnouncement(ads.data)

      }
    } catch (error) {
      console.log(error)
    }
  }, [])
  // supprimer une annonce
  const supprimer = async (id) => {
    try {
      if (token) {

        const supp = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}annonce/drop/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {
          withCredentials: true,
        })

        setCheck("")
        const ads = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/get`, { headers: { Authorization: `Bearer ${token}` } }, {
          withCredentials: true,
        })
        if (ads.data) {
          setAnnouncement(ads.data)
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
  // pour une condition pour afficher le oui et le non 
  const renderConfirmation = () => {
    return (
      <div>
        <h3>Voulez-vous vraiment supprimer cette annonce ?</h3>
        <div className={classes.supprimer}>
          <Button
            className={classes.delete}
            onClick={() => supprimer(check)}
          >
            OUI
          </Button>
          <Button
            className={classes.delete}
            onClick={() => setCheck("")}
          >
            NON
          </Button>
        </div>
      </div>

    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (

    <div>
      <div>
        <h2>MES ANNONCES</h2>

      </div>
      {/* conditions */}
      {check ? (
        renderConfirmation()
      ) : (
        <div style={{ display: "flex", justifyContent: "" }}>
          <Carousel breakPoints={breakPoints}>

            {announcement.slice(0).map((annonce) => (
              <Link to={`/modifyAnnonce/${annonce.id}`}>
                <Card photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} suppAnnonce={setCheck} id={annonce.id} />
              </Link>))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

