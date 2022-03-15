import React from "react";
import MainContentContainer from "../UI/MainContentContainer";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
  Box,
} from "@mui/material";
import { SiDart, SiPython, SiJavascript, SiFlutter } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiReact } from "react-icons/si";

const CoreCompetencies = (props) => {
  return (
    <MainContentContainer id="certifications">
      <div
        className="App"
        style={{
          paddingTop: "50px",
          // paddingLeft: "100px",
          // paddingRight: "100px",
          paddingBottom: "50px",
          backgroundColor: "#FFFEFE",
          
        }}
      >

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            // pt: "50px",
            pl: "100px",
            pr: "100px",
            // pb: "50px",
            maxHeight: "70vh",
            // bgcolor: "#FFFEFE",
          }}
        >
          {props.certifications.map((certification) => (
            <Grid item key={certification.id}>
              <Card
                variant="outlined"
                sx={{
                  background: "#2A2B2A15",
                  minHeight: "50px",
                  minWidth: "120px",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{certification.name}</Typography>
                  <div>
                    <Typography variant="body2">
                      {certification.language}
                    </Typography>
                    {certification.language
                      .toLowerCase()
                      .includes("python") && <SiPython></SiPython>}
                    {certification.language.toLowerCase().includes("dart") && (
                      <SiDart></SiDart>
                    )}
                    {certification.language.toLowerCase().includes("dart") && (
                      <SiFlutter></SiFlutter>
                    )}
                    {certification.language.toLowerCase().includes("sql") && (
                      <AiOutlineConsoleSql></AiOutlineConsoleSql>
                    )}
                    {certification.language
                      .toLowerCase()
                      .includes("javascript") && <SiJavascript></SiJavascript>}
                    {certification.language.toLowerCase().includes("react") && (
                      <SiReact></SiReact>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </MainContentContainer>
  );
};

export default CoreCompetencies;
