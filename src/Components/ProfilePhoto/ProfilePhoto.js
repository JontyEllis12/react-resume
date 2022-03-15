// import { borderRadius } from "@mui/system";
import React from "react";
// import { Card } from "@mui/material";

const ProfilePhoto = () => {
  return (
    <img
      src={
        "https://media-exp1.licdn.com/dms/image/C5603AQFulAedxrSJoQ/profile-displayphoto-shrink_800_800/0/1583621372808?e=1649894400&v=beta&t=NMMy0Xz_ITiu-mnTC3LRxfABoC5X7A72ADLJLDXk27Q"
      }
      alt="Logo"
      style={{ maxWidth: '150px', maxHeight: '125px', borderRadius: 10}}
    />
  );
};

export default ProfilePhoto;
