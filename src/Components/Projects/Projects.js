import React from "react";
import MainContentContainer from "../UI/MainContentContainer";
import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { SiDart, SiPython, SiJavascript } from "react-icons/si";

const Projects = (props) => {
  return (
    <MainContentContainer id="project timeline">
      <div
        style={{
          // backgroundColor: "#2A2B2A",
          // backgroundColor: "#EBEEEE",
          backgroundColor: "#FFFFFF",
          // paddingTop: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
          // paddingBottom: "50px",
        }}
      >
        <Timeline >
          {props.projects.map((project) => (
            <TimelineItem key={project.id}>
              <TimelineOppositeContent style={{ flex: 0.1 }}>
                <Typography variant="body1">{project.year}</Typography>
                <Typography variant="body2">{project.company}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  {project.language.toLowerCase().includes("python") && (
                    <SiPython></SiPython>
                  )}
                  {project.language.toLowerCase().includes("dart") && (
                    <SiDart></SiDart>
                  )}
                  {project.language.toLowerCase().includes("javascript") && (
                    <SiJavascript></SiJavascript>
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ px: 2 }}>
                <Typography variant="h5" component="span">
                  {project.name}
                </Typography>
                <Typography>Language(s) - {project.language}</Typography>
                <Typography>{project.description}</Typography>
                <Box sx={{ height: "40px" }}></Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </MainContentContainer>
  );
};

export default Projects;
