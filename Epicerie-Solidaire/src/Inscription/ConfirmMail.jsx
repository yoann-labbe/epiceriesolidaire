// Mail envoyé pour confirmé son compte

import React from "react"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    button: {
        borderRadius: "25px",
        fontSize: "large",
        backgroundColor: "#62A675",
        color: "black",
        width: "15%",
        height: "30px",
        marginLeft: "43%",
        marginBottom: "50%",
        marginTop: "20px"

    },
}))

export default function ConfirmMail() {
    const classes = useStyles();

    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "5%" }}>
                <h3>Votre compte vient d'être activé.<br /> Vous pouvez dès a présent vous connecter</h3>
            </div>
            <Button className={classes.button} href="/connexion">CONNEXION</Button>
        </div>

    )
}