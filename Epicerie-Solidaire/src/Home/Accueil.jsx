// Acceuil et visualisation des recherches via la search barre

import React, { useState } from 'react';
import Search from './Search';
import Works from './Works';
import LastAnnouncement from './LastAnnouncement';
import axios from 'axios';
import CardAds from './Components/CardAds';
import { Link } from 'react-router-dom';

export default function Accueil(props) {
  const [annonce, setAnnonce] = React.useState("");
  const [searchValue, setSearhValue] = React.useState("");
  const [write, setWrite] = useState(false)
  const handleChange = (event) => {
    setSearhValue(event.target.value);
  };
//fonction pour chercher par le titre
  const search = async () => {
    try {

      const findSearch = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/title/${searchValue}`, {
        withCredentials: true,
      });
      if (findSearch.data) {

        setAnnonce(findSearch.data)
        setWrite(true)
        return true
      } else {

      }
    } catch (error) {
      console.log(error)


    }
  }

  if (write == true) {
    if (
      annonce.length != 0
    ) {



      return (
        <div>
          <Search onChange={handleChange} plante={search} searchValue={searchValue} />

          <div style={{ display: "flex", flexDirection: "row" }}>
            {annonce.map((annonce) => (
              <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                <CardAds photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} />
              </Link>
            ))}
          </div>

          <LastAnnouncement />
          <Works />
        </div>
      )
    }
    else if (
      annonce.length == 0
    ) {
      // pour indiquer une erreur 
      return (
        <div>
          <Search onChange={handleChange} plante={search} searchValue={searchValue} />
          <h3 style={{ marginTop: "15px", marginLeft: "10px" }}>Désolé, votre recherche ne correspond aux végétaux disponible. Veuillez recommencer une recherche.</h3>
          <LastAnnouncement />
          <Works />
        </div>
      )
    }
  }

  else {
    return (
      <div>
        <Search onChange={handleChange} plante={search} searchValue={searchValue} />

        <LastAnnouncement style={{}} />
        <Works />
      </div>
    )
  };
}

