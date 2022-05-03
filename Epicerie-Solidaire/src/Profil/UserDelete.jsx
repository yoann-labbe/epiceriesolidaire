import React, { useState } from 'react';
import axios from "axios";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "35%",
    height: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    marginLeft: "30%"
  },
}));

export default function UserDelete({ handleClose, confirmation }) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const classes = useStyles();
  const [cookies, setCookies, removeCookies] = useCookies(["token"])
  const token = cookies.token


  const deleteUser = async () => {
    try {
      if (token) {
        const userdelete = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}create/drop`, { headers: { Authorization: `Bearer ${token}` } }, {
          withCredentials: true,
        })
        if (userdelete.data) {
          setConfirmDelete(true)
          confirmation(true)
          removeCookies("token", { path: "/" })

        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (confirmDelete == false) {


    return (

      <div>



        <h2 style={{ textAlign: "center" }}> Vous voulez vraiment supprimer votre compte</h2>



        <Button onClick={(e) => deleteUser(e)} className={classes.button} type="button">OUI</Button>
        <Button onClick={handleClose} className={classes.button} type="button">NON</Button>


      </div>
    )
  } else {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>votre compte a été supprimer</h3>
      </div>
    )
  }

}