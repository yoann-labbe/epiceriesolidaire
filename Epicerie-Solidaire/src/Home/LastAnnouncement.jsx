// Visualiser les dernières annonces publiés à l'aide d'un carroussel

import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CardAds from "../Home/Components/CardAds";
import axios from 'axios';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';





const useStyles = makeStyles((theme) => ({
  marketplace: {

  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function LastAnnouncement() {

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);



  const classes = useStyles();
  const [announcement, setAnnouncement] = useState([]);
  const [ville, setVille] = useState([]);

  useEffect(async () => {
    // pour recuperer les derniere annonces

    try {
      const ads = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/allannonce`, {
        withCredentials: true,
      });

      setAnnouncement(ads.data)



    } catch (error) {
      console.log(error)
    }
  }, [])

  return (

    <div>

      <h1 style={{color: "#D5D82C", fontSize: "3.75em" , textAlign: "center", marginTop: "40%"}}> Nos dernières annonces </h1>


      <div style={{ display: "flex", justifyContent: "" }}>
        <Carousel breakPoints={breakPoints}>
          {announcement.slice(0).reverse().map((annonce) => (
            <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
              <CardAds photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} />
            </Link>
          ))}
        </Carousel>
      </div>

    </div>
  );
}

