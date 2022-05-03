// PAS UTILISÉ

// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function SelectList() {
//   const [category, setCategory] = React.useState('');
//   const [delivery, setDelivery] = React.useState('');
//   const [flowerPot, setflowerPot] = React.useState('');

//   const handleChange = (event) => {
//     setCategory(event.target.value);
//     setDelivery(event.target.value);
//     setflowerPot(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl>
//         <InputLabel id="demo-simple-select-autowidth-label">Catégorie</InputLabel>
//         <Select
//         style={{ width: "395px" }}
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={category}
//           onChange={handleChange}
//           autoWidth
//           label="Catégorie"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={1}>Plantes d'intérieur</MenuItem>
//           <MenuItem value={2}>Cactus et plantes d'extérieur</MenuItem>
//           <MenuItem value={3}>Potager et arbres fruitiers</MenuItem>
//           <MenuItem value={4}>Plantes carnivores</MenuItem>
//           <MenuItem value={5}>Graines et bulbes</MenuItem>
//           <MenuItem value={6}>Plantes d'extérieur</MenuItem>
//           <MenuItem value={7}>Autres plante</MenuItem>
//           <MenuItem value={8}>Accéssoires</MenuItem>
//         </Select>
//       </FormControl>
//       <br/>
//       <br/>
//       <br/>
//       <FormControl>
//         <InputLabel id="demo-simple-select-autowidth-label">Voulez-vous proposez le service de livraion ?</InputLabel>
//         <Select
//         style={{ width: "395px" }}
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={delivery}
//           onChange={handleChange}
//           autoWidth
//           label="Voulez-vous proposez le service de livraion ?"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"oui"}>Oui</MenuItem>
//           <MenuItem value={"non"}>Non</MenuItem>
//         </Select>
//       </FormControl>
//       <br/>
//       <br/>
//       <br/>
//       <FormControl>
//         <InputLabel id="demo-simple-select-autowidth-label">Votre végétal est-il dans un pot ?</InputLabel>
//         <Select
//         style={{ width: "395px" }}
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={flowerPot}
//           onChange={handleChange}
//           autoWidth
//           label="Votre végétal est-il dans un pot ?"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"yes"}>Oui</MenuItem>
//           <MenuItem value={"no"}>Non</MenuItem>
//         </Select>
//       </FormControl>
//       <br/>
//       <br/>
//       <br/>
//     </div>
//   );
// }