// PAS UTILE

// import React, { Component } from 'react';

// export default class Checkbox extends Component {

// constructor(props) 
// {
//     super(props);
//     this.state = {
//     isGoing: false,
//     isGoings: false,
    
//         };
      
//           this.handleInputChange = this.handleInputChange.bind(this);
//         }

// handleInputChange(event) 
// {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
    
//         this.setState({
//           [name]: value
//         });
//       }   

//   render(){
//         return(
    
//         <div>
//         <form>
//           <label>
//             Voulez-vous proposez le service de livraion ?
//             </label>
//             <input
//             style={{marginLeft:"20px"}}
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//             OUI
          
//           <br />
//           <br/>
//           <br />
//           <label>
//             Votre végétal est-il dans un pot ?
//             <input
//             style={{marginLeft:"20px"}}
//               name="isGoings"
//               type="checkbox"
//               checked={this.state.isGoings}
//               onChange={this.handleInputChange} />
//             OUI
//           </label>
//           <br /> 
//         </form>
//         </div>
//         )
//     }
// }

