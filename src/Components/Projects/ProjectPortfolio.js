import React from "react";
import MainContentContainer from "../UI/MainContentContainer";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Stack,
} from "@mui/material";

const ProjectPortfolio = (props) => {
  return (
    <MainContentContainer id="portfolio">
      <div
        className="App"
        style={{
          // paddingTop: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
          // paddingBottom: "50px",
          // backgroundColor: "#2A2B2A",
          // minHeight:"70vh",
          // height:"70vh",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignContent="space-around"
          // sx={{ minHeight: "70vh" }}
        >
          {props.projects.map((project) => (
            <Grid item key={project.id}>
              <Card
                variant="outlined"
                sx={{
                  minHeight: "200px",
                  minWidth: "300px",
                  //   background: "#FFFFFF90",
                  //   background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), `url(project.img)`,
                  backgroundImage: project.img,
                  //   filter: brightness(0.5),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  justifyContent: "center",
                  borderRadius:"10px",
                  fontStyle: {
                    color: "transparent",
                  },

                  ":hover": {
                    // backgroundImage: project.img,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",

                    color: "black",
                    backgroundImage: "none",
                    backgroundColor: "#ff5959",
                    // transform: scale(1.5),
                    fontStyle: { color: "white" },
                  },
                }}
              >
                <CardActionArea href={project.url}>
                  <CardContent
                    sx={{
                      height: "200px",
                      width: "360px",
                      justifyItems: "center",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                  <Stack spacing={1} sx={{ height:"200px", justifyContent:"center"}}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </MainContentContainer>
  );
};

export default ProjectPortfolio;
