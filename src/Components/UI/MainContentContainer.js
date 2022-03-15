import React from "react";
import { Typography, Grid, Card, Stack, Box } from "@mui/material";

const MainContentContainer = (props) => {
  
  return (
    <div id={props.id}>
      <Grid container justifyContent="flex-end" width="100vw" height="100vh">
        <Card
          sx={{
            width: "75vw",
            minWidth: "1045px",
            // height: "70vh",
            // minWidth: "1586px",
            maxHeight: "70vh",
            marginRight: "5vw",
            marginTop: "15vh",
            marginBottom: "15vh",
            justifyContent: "center",
            overflow: "scroll",
            bgcolor: "#FFFEFE",
            // backgroundColor: "#FFFEFE",
            borderRadius: 5,
            boxShadow: 3,
          }}
        >
          {!props.id.toLowerCase().includes('home') && (
                    <Stack sx={{ marginLeft: 5, marginTop: 5,}}>
                    <Typography variant="h4" textAlign="left" textTransform="capitalize">
                      {props.id}
                    </Typography>
                    <Box
                      sx={{
                        width: "30px",
                        height: "5px",
                        // pt: 1,
                        // pb: 5,
                        marginTop: 2,
                        marginBottom: 5,
                        bgcolor: "#ff5959",
                        borderRadius: "25px",
                      }}
                    />
                  </Stack>
                  )}
          
          {props.children}
        </Card>
      </Grid>
    </div>
  );
};

export default MainContentContainer;
