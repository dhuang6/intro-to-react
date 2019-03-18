import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
//import what from where.
import style from './style';
import FirstNameField from './FirstNameField';
import LastNameField from './LastNameField';
//react is similar to js in that you should use functions for simple data and code.
class SimpleForm extends React.Component {
 

  render(){
    const {firstNameError, firstName, lastName, lastNameError} = this.state;

    return (
      <div style={style.form}>
      <FirstNameField onChange={this.onFirstNameChange}
          onBlur={this.onFirstNameBlur}
          error={firstNameError}/>

      <LastNameField onChange={this.onLastNameChange}
          onBlur={this.onLastNameBlur}
          error={lastNameError}/>    

      <Greetings
        firstName = {firstName} lastName={lastName}/>
      </div>
    );
  }
}
export default SimpleForm;

const App = () => (
  <div>
    <SimpleForm />
  
  </div>
);
//export default App;
