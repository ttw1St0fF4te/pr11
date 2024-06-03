import React from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

class App extends React.Component{
  render(){
    return(
      <body>
        <Header/>
        <MainBody/>
        <Footer/>
      </body>
    )
  }
}

export default App