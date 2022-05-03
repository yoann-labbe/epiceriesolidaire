// // Récupération de l'Iban

// import { Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core';
// import React from 'react';

// const useStyles = makeStyles(() => ({
//   button: {
//     borderRadius: "25px",
//     backgroundColor: "#33FF93",
//     color: "black",
//     width: "75%",
//     height: "50px",
//     marginLeft: "50px",
//     marginBottom: "40px",

//   },
// }))

// export default function Iban(props) {

//   const classes = useStyles();

//   return (
//     <div>
//       <Typography>
//         Afin de recevoir votre paiement après la transaction, merci de renseigner votre IBAN
//       </Typography>
//       <br />
//       <br />
//       <Grid item xs={12}>
//         <TextField
//           placeholder="IBAN *"
//           label="IBAN *"
//           //onChange={handleChange('IBAN')}
//           //defaultValue={values.IBAN}
//           variant="outlined"
//           autoComplete="IBAN"
//           fullWidth
//         />
//       </Grid>
//       <br />

//       <Grid item xs={6}>
//         <TextField
//           placeholder="BIC *"
//           label="BIC *"
//           //onChange={handleChange('BIC')}
//           //defaultValue={values.BIC}
//           variant="outlined"
//           autoComplete="BIC"
//           fullWidth
//         />
//       </Grid>
//       <br />
//       <Button
//         className={classes.button}
//         //onClick={ Validez }
//         type="submit"
//         fullWidth
//         variant="contained"

//       >
//         Valider
//       </Button>
//     </div>
//   );
// }

