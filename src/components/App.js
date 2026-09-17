import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   // Array of dream projects with name and description
  const projects = [
    {
      name: "AI-Powered Personal Assistant",
      description: "An intelligent assistant that manages daily tasks, schedules, and provides personalized recommendations."
    },
    {
      name: "Eco-Friendly Transportation App",
      description: "A platform connecting users with sustainable transport options like electric carpooling and bike-sharing."
    },
    {
      name: "Virtual Reality Learning Platform",
      description: "An immersive educational tool that brings history, science, and art to life through interactive VR experiences."
    },
    {
      name: "Community Health Tracker",
      description: "A collaborative app for neighborhoods to monitor and improve local health and wellness initiatives."
    }
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
          {projects.map((project,index) => (
            <div key={index} className="project-card">
              <h1 data-ns-test="project-name">{project.name}</h1>
              <h6 data-ns-test="project-description">{project.description}</h6>
              </div>
          ))}
      </div>
    </div>
  )
}


export default App;
