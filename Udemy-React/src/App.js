import './App.css';
import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
import Slidder from "./Components/Slidder"
import Instructor from './Components/Footer/Footer-Instructor';
import HeaderPopup from './Components/HeaderPopup/HeaderPopup';
import Cards from './Components/Cards/Cards';
import ImgMediaCard  from './Components/Cards/Cards1';
import {Switch , Route} from "react-router-dom"
import {Signup} from "./Components/Signup/Signup"
class App extends React.Component{
  render(){
    return(
      <div>
        <HeaderPopup />
        
        <Navbar /> 
        
      <Switch>
      <Route path="./signup" component={Signup}> </Route>       
      </Switch>
      
        <Slidder />
        <Cards /> 
      
       <Instructor/>
       <Footer /> 
      </div>
    )
  }
} 


export default App;
