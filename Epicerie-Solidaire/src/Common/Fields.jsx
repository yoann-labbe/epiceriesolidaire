// NE SERT PAS DANS LE CODE

// import { Component } from "react"

// export default class Fields extends Component {
// render() {

// const fields = 
//     {
//     title: 'Les prix',
//     fields: [
//     {
//       confirm: 'check_price',
//       type: 'number',
//       label: `Prix voulu en €*`,
//       disabled: false,
//       rules: v => {
//         return v > 0 || "Le prix doit être positif."
//       }
//     }, 
//     {
//       confirm: 'check_price',
//       type: 'number',
//       label: `Prix affiché au client en €`,
//       inferiorOf: `Prix d'origine en €*`,
//       computed: fields => {
//         const value = isNaN(parseFloat(fields[1].value)) ? 0 : parseFloat(fields[1].value)
//         const marge = v => v > 1 && v < 4.99
//           ? 0.50
//           : v >= 5 && v < 9.99
//             ? 1
//             : v >= 10 && v < 19.99
//               ? 1.5
//               : v >= 20 && v < 34.99
//                 ? 2
//                 : v >= 35
//                   ? 3.5
//                   : 0
//         const ceil = v => {
//           const centimes = (v * 100) % 100
//           if (centimes > 50) {
//             return parseInt(v + 1) + '.00'
//           }
//           return parseInt(v) + .5 + '0'
//         }
//         //fields[2].value = ceil((value + 0.35 + marge(value)) * 1.014);
//         return ceil((value + 0.35 + marge(value)) * 1.014)
//       }
//     }, {
//       render: h => h(SelfInfo)
//     }]
//   },
// }
// }
