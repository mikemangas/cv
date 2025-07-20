import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Address from "./components/Address/Address";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Hobbies from "./components/Hobbies/Hobbies";
import Knowledge from "./components/Knowledge/Knowledge";
import Languages from "./components/Languages/Languages";
import Socials from "./components/Socials/Socials";
import Volunteer from "./components/Volunteer/Volunteer";
import Picture from "./components/Picture/Picture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <Title />
          <Picture />
        </div>
        <div className="socialsAddress">
          <Socials />
          <Address />
        </div>
        <div className="core">
          <Experience />
          <Knowledge />
          <Languages />
          <Education />
          <Volunteer />
          <Hobbies />
        </div>
      </header>
    </div>
  );
}

export default App;
