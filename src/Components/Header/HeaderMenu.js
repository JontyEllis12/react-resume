import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import { Grid } from "@mui/material";

const HeaderMenu = () => {

    const scrollContactHandler = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      };
      const scrollCertificationsHandler = () => {
        document
          .getElementById("certifications")
          .scrollIntoView({ behavior: "smooth" });
      };
      const scrollProjectsHandler = () => {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      };
      const scrollPortfolioHandler = () => {
        document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
      };
      const scrollExperienceHandler = () => {
        document
          .getElementById("experiences")
          .scrollIntoView({ behavior: "smooth" });
      };
  return (
    <Grid container spacing={2} justifyContent="center" sx={{pt: 3}}>
      <HeaderMenuItem scrollHandler={scrollContactHandler}>Contact</HeaderMenuItem>
      <HeaderMenuItem scrollHandler={scrollCertificationsHandler}>Certifications</HeaderMenuItem>
      <HeaderMenuItem scrollHandler={scrollProjectsHandler}>Projects</HeaderMenuItem>
      <HeaderMenuItem scrollHandler={scrollPortfolioHandler}>Portfolio</HeaderMenuItem>
      <HeaderMenuItem scrollHandler={scrollExperienceHandler}>Experience</HeaderMenuItem>
    </Grid>
  );
};

export default HeaderMenu;
