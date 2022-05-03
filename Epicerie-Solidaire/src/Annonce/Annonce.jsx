// Changement de page en cliquant sur suivant ou précedent lors de la création d'une annonce

import React, { Component } from 'react'
import AnnonceDetails from './AnnonceDetails'
import Details from './Details'
import PictureDetails from './PictureDetails'
import Confirm from './Confirm'
import Succes from './Succes'


export default class Annonce extends Component {

  state = {
    step: 1,
    createdAt: '',
    title: '',
    category: '',
    delivery: '',
    flowerPot: '',
    stock: '',
    validity: '',
    description: '',
    priceOrigin: '',
    priceWanted: '',
    photoA: '',
    photoB: '',
    photoC: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  // pour recuperer les informations
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {


    const { step } = this.state;
    const { createdAt, title, category, delivery, flowerPot, stock, validity, description, priceOrigin, priceWanted, photoA, photoB, photoC } = this.state;
    const values = { createdAt, title, category, delivery, flowerPot, stock, validity, description, priceOrigin, priceWanted, photoA, photoB, photoC }

    switch (step) {
      case 1:
        return (
          <AnnonceDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Details
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <PictureDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}

          />
        )
      case 5:
        return (
          <Succes />
        )

      default:
      // do nothing
    }
  }

}