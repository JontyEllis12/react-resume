import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExperienceCard = (props) => {

  return (
    <Card
      id={props.id}
      key={props.id}
      variant="outlined"
      sx={
        {
          // background: "#2A2B2A15",
          // backgroundColor: "#EFF0F2",
          // color: "white",
          borderColor: "transparent",
          
        }
      }
    >
      <CardContent>
        <Grid container >
          <Grid container justifyContent="space-between">
          <Grid item  
          // sx={{ maxWidth: "20%" }}
          >
            <Typography variant="h5">{props.company}</Typography>
            <Typography variant="h7">{props.role}</Typography>
            <Typography variant="body2">
              {props.startDate} - {props.endDate}
            </Typography>
          </Grid>
          <Grid item  
          // sx={{ maxWidth: "8%" }}
          >
            <img
              src={props.logo}
              alt={props.company}
              //   height={25}
              style={{
                maxWidth: "125px",
                //maxHeight: "60px",
                // borderRadius: 10,
              }}
            />
          </Grid>
          
          </Grid>
          <Grid item 
          // sx={{ maxWidth: "72%" }}
          >
            <Typography variant="body1" sx={{paddingTop:"10px"}}>{props.description}</Typography>

            <Typography
              variant="h6"
              sx={{
                paddingTop: "10px",
              }}
            >
              Role Experience
            </Typography>

            {props.examples.map((example) => (
              <div
              key={Math.floor(Math.random() * 1000)}
                style={{
                  paddingTop: "10px",
                }}
              >
                {Object.entries(example).map(([key, value]) => (
                  <Accordion key={props.examples.indexOf(example)}
                  sx={{borderRadius: 5,
                    boxShadow: 3,}}
                  >
                    <AccordionSummary
                      aria-controls="panel2a-content"
                      expandIcon={<ExpandMoreIcon />}
                      id={key}
                      key={key}
                    >
                      <Typography>{key}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {value.map((keyPoint) => (
                        <Typography key={keyPoint}>{keyPoint}</Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
