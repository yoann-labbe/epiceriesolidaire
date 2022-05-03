import React, { useState } from 'react';
import axios from "axios";
import ButtonFormik from "../Common/ButtonFormik";
import FormFormik from "../Common/FormFormik";
import ConnectField from "../Connected/ConnectField";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

import { Button, makeStyles } from "@material-ui/core";

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
        backgroundColor: "#33FF93",
        color: "black",
        width: "15%",
        height: "50px",
        marginTop: "10px",
        marginBottom: "10px",
    },
}));

export default function PasswordReset() {
    const classes = useStyles();
    const validationSchema = Yup.object().shape({

        password: Yup.string().required("Veuillez saisir votre nouveau mot de passe"),
        passwordConfirm: Yup.string().required("Veuillez confirmer votre nouveau mot de passe"),

    });
    const { user } = useParams()

    const [confirmPassword, setConfirmPassword] = useState(false)
    const [erreur, setErreur] = useState(true)
// fonction pour le nouveau mot de passe 
    const confirmation = async (values) => {
        try {
            const { password, passwordConfirm } = values

            if (password === passwordConfirm) {
                const email = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/resetpassword/${user}`, { password }, {
                    withCredentials: true,
                })
                if (email.data) {
                    setConfirmPassword(true)
                }
            } else {
                setErreur(false)
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (confirmPassword == false && erreur == true) {
        return (
            <div>

                <FormFormik
                    initialValues={{

                        password: "",
                        passwordConfirm: "",
                    }}

                    validationSchema={validationSchema}
                    onSubmit={confirmation}
                >
                    <h1>Confirmer votre nouveau mot de passe</h1>
                    <ConnectField name="password" type="password" placeholder="Mot de passe" />
                    <ConnectField name="passwordConfirm" type="password" placeholder="Confirmer le Mot de passe" />

                    <ButtonFormik title="envoyer" type="button" />

                </FormFormik>
            </div>
        )
    } else if (confirmPassword == true) {
        return (
            <div>
                <h1>Votre mot de passe a été modifier vous pouvez vous connecter</h1>
                <Button className={classes.button} href="/connexion">connexion</Button>
            </div>
        )
    } else if (erreur == false) {
        return (
            <div>

                <FormFormik
                    initialValues={{

                        password: "",
                        passwordConfirm: "",
                    }}

                    validationSchema={validationSchema}
                    onSubmit={confirmation}
                >
                    <h1>Confirmer votre nouveau mot de passe</h1>
                    <h3>les mots de passe ne sont pas les mêmes veuiller recommencer</h3>
                    <ConnectField name="password" type="password" placeholder="Mot de passe" />
                    <ConnectField name="passwordConfirm" type="password" placeholder="Confirmer le Mot de passe" />

                    <ButtonFormik title="envoyer" type="button" />

                </FormFormik>
            </div>
        )
    }
}