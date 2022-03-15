import React from "react";
import {
  Stack,
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";

const Profile = () => {
  return (
    <div>
      <Box
        sx={{
          // p: 2,
          display: "flex",
        }}
        // padding="20px"
      >
        <Stack spacing={1}>
          <Typography variant="h5" fontWeight={700} color="#FFFEFE">
            About Me
          </Typography>
          <Typography
            variant="body1"
            // color="text.secondary"
            color="#7B7B7A"
          >
            London, UK<br />London, UK<br />London, UK
          </Typography>
          <Accordion
            sx={{
              // opacity: 0.1,
              width: 1,
              minWidth: 300,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              // expanded={true}
              // aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                width: 1,
              }}
            >
              <Typography>Contact Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItemButton
                  component="a"
                  href="mailto:jonathan.ellis@itsonlyjonty.com"
                >
                  <MailOutlineIcon
                    style={
                      {
                        // color: "#FFFEFE",
                      }
                    }
                  />
                  <ListItemText primary="Email" color="white" />
                </ListItemButton>

                <ListItemButton
                  component="a"
                  href="https://www.linkedin.com/in/jontyellis/"
                >
                  <LinkedInIcon
                    style={
                      {
                        // color: "#FFFEFE",
                      }
                    }
                  />
                  <ListItemText primary="LinkedIn" />
                </ListItemButton>

                <ListItemButton component="a" href="tel:+447914671927">
                  <PhoneIcon
                    style={
                      {
                        // color: "#FFFEFE",
                      }
                    }
                  />
                  <ListItemText primary="Phone" />
                </ListItemButton>

                <ListItemButton
                  component="a"
                  href="https://github.com/JontyEllis12/"
                >
                  <GitHubIcon
                    style={
                      {
                        // color: "#FFFEFE",
                      }
                    }
                  />
                  <ListItemText primary="Github" />
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
