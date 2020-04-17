import React, {Component} from 'react';
import './App.css';
import CovidForm from './covidForm';
import Cases from "./cases";






class App extends Component {



render(){


 return (
  <div style={{padding:'50px'}}>
   <CovidForm />
   <Cases />



   </div>


  );

}

}

export default App;
