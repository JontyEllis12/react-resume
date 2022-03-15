import React from "react";
import MainContentContainer from "../UI/MainContentContainer.js";
import { Box, Grid, Typography, Divider } from "@mui/material";
import ExperienceCard from "./ExperienceCard.js";

const Experience = (props) => {
  return (
    <MainContentContainer id="experiences">
      <div
        style={{
          // backgroundColor: "#2A2B2A",
          // backgroundColor: "#2A2B2A15",
          // paddingTop: "50px",
          // paddingLeft: "100px",
          // paddingRight: "100px",
          paddingLeft:25,
          paddingRight:25,
          paddingBottom: "50px",
          backgroundColor:"#FFFFFF"
        }}
      >
        <Box component="span" sx={{ flexGrow: 1 }}>

          {props.experiences.map((job) => (
            <Grid
              key={props.experiences.indexOf(job)}
              container
              spacing={2}
              paddingBottom="10px"
            >
              {/* <Grid item sx={{ width: "7%" }} /> */}
              <Grid item 
              // sx={{ width: "86%" }}
              >
                <ExperienceCard
                  id={job.id}
                  company={job.company}
                  logo={job.logo}
                  role={job.role}
                  tools={job.tools}
                  languages={job.languages}
                  description={job.description}
                  achievementHeaders={job.achievementHeaders}
                  achievements={job.achievements}
                  // exampleHeaders={job.exampleHeaders}
                  examples={job.examples}
                  startDate={job.startDate}
                  endDate={job.endDate}
                />
                <Divider></Divider>
              </Grid>
              {/* <Grid item sx={{ width: "7%" }} /> */}
            </Grid>
          ))}
        </Box>
      </div>
    </MainContentContainer>
  );
};

export default Experience;
