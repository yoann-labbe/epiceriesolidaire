// Changement de page en cliquant sur suivant ou précedent lors de la création d'une annonce

import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'

export default class Inscription extends Component {

  state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    cp: '',
    country: '',
    phone: '',
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
  // recuperer les valeur
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstname, lastname, email, password, address, cp, country, phone } = this.state;
    const values = { firstname, lastname, email, password, address, cp, country, phone }

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 4:
        return (
          <Success />
        )
      default:
      // do nothing
    }
  }
}