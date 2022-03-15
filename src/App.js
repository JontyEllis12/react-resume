import React from "react";
import { Grid, Stack } from "@mui/material";
import "./App.css";
import CoreCompetencies from "./Components/Skillset/CoreCompetencies";
import Header from "./Components/Header/Header";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ProjectPortfolio from "./Components/Projects/ProjectPortfolio";
import mainInfo from "./Data/MainInfo";
import certifications from "./Data/Certifications";
import experienceInfo from "./Data/ExperienceInfo";
import projectTimeline from "./Data/ProjectTimeline";
import portfolioProjects from "./Data/PortfolioProjects";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div style={{ backgroundColor: "#F7F6FF", minWidth: "1500px" }}>
      <SideBar></SideBar>

      <Stack>
        <Header id="home" info={mainInfo} />

        {/* <ProfileContainer /> */}

        <CoreCompetencies certifications={certifications} />

        <Projects projects={projectTimeline} />

        <ProjectPortfolio projects={portfolioProjects} />

        <Experience experiences={experienceInfo} />
      </Stack>
    </div>
  );
}

export default App;
