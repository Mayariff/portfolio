import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import RemoteWork from "./remoteWork/RemoteWork";
import Footer from "./footer/Footer";
import {Contacts} from "./contacts/Contacts";



function App() {
  return (
    <div className={".App"}>
      <Header />
        <Main />
        <Skills />
        <Projects />
      <RemoteWork />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
