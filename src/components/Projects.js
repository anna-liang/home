import React from "react";
import { Project } from "./Project";
import moodBoardImg from "../media/mood-board-small.png";
import lrddImg from "../media/lrdd-small.png";
import shinyTrackerImg from "../media/shiny-tracker-small.png";
import "../styles/Project.css";
import "../styles/Main.css";

export const Projects = () => (
  <div>
    <div className="subheading-container">
      <h1 className="subheading">Projects</h1>
    </div>
    <div className="projects">
      <Project
        img={shinyTrackerImg}
        title="Shiny Tracker"
        desc="A Pokémon shiny hunt counter and tracker for the most those who like to find shiny pokémon."
        tools={["JavaScript", "Node.js", "React", "MongoDB"]}
        github="https://github.com/anna-liang/shiny-tracker"
      />
      <Project
        img={lrddImg}
        title="La Room de Discode"
        desc="A collaborative videotelephony editor for users to host rooms and work on coding problems together."
        tools={["JavaScript", "Node.js", "React", "MongoDB", "GraphQL"]}
        github="https://github.com/anna-liang/lrdd"
      />
      <Project
        img={moodBoardImg}
        title="Mood Board"
        desc="Mood Board creates a collection of a user's top 9 Spotify tracks organized in one cohesive mood board."
        tools={["Python", "Django"]}
        github="https://github.com/anna-liang/mood-board"
      />
    </div>
  </div>
);
