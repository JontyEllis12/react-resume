import { Avatar, Divider, Stack, Grid, Typography } from "@mui/material";
import React from "react";
import SideBarContentContainer from "../UI/SideBarContentContainer";
import SideBarMenuItem from "../UI/SideBarMenuItem";
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonCircle, BsAward } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const SideBar = () => {
  const scrollHomeHandler = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  // const scrollContactHandler = () => {
  //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  // };
  const scrollCertificationsHandler = () => {
    document
      .getElementById("certifications")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollProjectsHandler = () => {
    document.getElementById("project timeline").scrollIntoView({ behavior: "smooth" });
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
    <SideBarContentContainer>
      <Stack
        paddingTop={3}
        paddingLeft={1}
        paddingRight={1}
        // spacing={3}
      >
        <Stack spacing={1} sx={{marginBottom:2}}>
          <Avatar
            alt="Jonty Ellis"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFulAedxrSJoQ/profile-displayphoto-shrink_800_800/0/1583621372808?e=1649894400&v=beta&t=NMMy0Xz_ITiu-mnTC3LRxfABoC5X7A72ADLJLDXk27Q"
            sx={{ height: 56, width: 56 }}
          ></Avatar>
          <Stack>
            <Typography variant="h5" color="white" sx={{ pl: 1 }}>
              Jonathan Ellis
            </Typography>
            <Typography variant="subtitle2" color="white" sx={{ pl: 1 }}>
              jonathan.ellis@itsonlyjonty.com
            </Typography>
          </Stack>
        </Stack>
        <SideBarMenuItem scrollHandler={scrollHomeHandler} label="Home">
          <IoHomeOutline color="white" />
        </SideBarMenuItem>
        {/* <SideBarMenuItem scrollHandler={scrollContactHandler} label="Contact">
          <BsPersonCircle color="white" />
        </SideBarMenuItem> */}
        <SideBarMenuItem
          scrollHandler={scrollCertificationsHandler}
          label="Certifications"
        >
          <BsAward color="white" />
        </SideBarMenuItem>
        <SideBarMenuItem scrollHandler={scrollProjectsHandler} label="Projects">
          <AiOutlineFundProjectionScreen color="white" />
        </SideBarMenuItem>
        <SideBarMenuItem
          scrollHandler={scrollPortfolioHandler}
          label="Portfolio"
        >
          <HiOutlineBriefcase color="white" />
        </SideBarMenuItem>
        <SideBarMenuItem
          scrollHandler={scrollExperienceHandler}
          label="Experience"
        >
          <FaLaptopCode color="white" />
        </SideBarMenuItem>
      </Stack>
    </SideBarContentContainer>
  );
};

export default SideBar;
