import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Profile from "./Profile";
import CompanyStack from "../Companies/CompanyStack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainContentContainer from "../UI/MainContentContainer";

const ProfileContainer = () => {
  return (
    <MainContentContainer id="contact">

      <Box
        component="span"
        sx={{
          flexGrow: 1,
          height: "70vh",
          paddingTop: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "50px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={2}>
            <ProfilePhoto />
          </Grid>
          <Grid item xs={6}>
            <Profile></Profile>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <CompanyStack></CompanyStack>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>

    </MainContentContainer>
  );
};

export default ProfileContainer;
