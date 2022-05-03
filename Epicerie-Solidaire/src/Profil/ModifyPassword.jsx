import React, { useState, useEffect } from 'react';
import axios from "axios";
import ButtonFormik from "../Common/ButtonFormik";
import FormFormik from "../Common/FormFormik";
import ConnectField from "../Connected/ConnectField";
import * as Yup from "yup";
import { useCookies } from 'react-cookie';
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

export default function ModifyPassword() {
    const classes = useStyles();
    const validationSchema = Yup.object().shape({

        password: Yup.string().required("Veuillez saisir votre  mot de passe actuel"),


    });


    const [confirmPassword, setConfirmPassword] = useState(false)
    const [erreur, setErreur] = useState(false)
    const [cookies, setCookies] = useCookies(["token"])
    const [verify, setVerify] = useState("false")
    const token = cookies.token


    const confirmation = async (values) => {
        try {
            // verification du mot de passe actuel

            const passwords = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/modify/pass`, values, { headers: { Authorization: `Bearer ${token}` } }, {
                withCredentials: true,
            })

            if (passwords.data.message === "You're now connected ") {
                setConfirmPassword(true)
            } else {
                setErreur(true)
            }


        } catch (error) {
            console.log(error)
        }
    }

    const modifypass = async (values) => {
        try {
            // modification du mot de passe 
            const { password, passwordConfirm } = values
            if (password === passwordConfirm) {
                const modifyPassword = await axios.patch(`${process.env.REACT_APP_API_BASE_URL}create/change`, values, { headers: { Authorization: `Bearer ${token}` } }, {
                    withCredentials: true,
                })
                if (modifyPassword.data) {
                    setVerify("true")
                }
            } else {
                setVerify("erreur")
            }

        } catch (error) {
            console.log(error)
        }
    }


    if (confirmPassword == false) {
        if (erreur == false) {
            return (
                <div>

                    <FormFormik
                        initialValues={{

                            password: ""

                        }}

                        validationSchema={validationSchema}
                        onSubmit={confirmation}
                    >
                        <h1>Confirmer votre mot de passe actuel</h1>
                        <ConnectField name="password" type="password" placeholder="Mot de passe" />


                        <ButtonFormik title="envoyer" type="button" />

                    </FormFormik>
                </div>
            )
        } else {
            return (
                <div>

                    <FormFormik
                        initialValues={{

                            password: ""

                        }}

                        validationSchema={validationSchema}
                        onSubmit={confirmation}
                    >
                        <h1>Confirmer votre mot de passe actuel</h1>
                        <h3>Votre mot de passe n'est pas le bon</h3>
                        <ConnectField name="password" type="password" placeholder="Mot de passe" />


                        <ButtonFormik title="envoyer" type="button" />

                    </FormFormik>
                </div>
            )
        }
    } else if (confirmPassword == true) {


        const validationSchema = Yup.object().shape({

            password: Yup.string().required("Veuillez saisir votre nouveau mot de passe"),
            passwordConfirm: Yup.string().required("Veuillez confirmer votre nouveau mot de passe"),

        });
        if (verify === "false") {

            return (
                <div>

                    <FormFormik
                        initialValues={{

                            password: "",
                            passwordConfirm: "",
                        }}

                        validationSchema={validationSchema}
                        onSubmit={modifypass}
                    >
                        <h1>Confirmer votre nouveau mot de passe</h1>
                        <ConnectField name="password" type="password" placeholder="Mot de passe" />
                        <ConnectField name="passwordConfirm" type="password" placeholder="Confirmer le Mot de passe" />

                        <ButtonFormik title="envoyer" type="button" />

                    </FormFormik>
                </div>
            )
        } else if (verify === "true") {
            return (
                <div>
                    <h1>Votre mot de passe a été modifier </h1>

                </div>
            )
        } else {
            return (
                <div>

                    <FormFormik
                        initialValues={{

                            password: "",
                            passwordConfirm: "",
                        }}

                        validationSchema={validationSchema}
                        onSubmit={modifypass}
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
}