import React from "react";
import { Stack, IconButton } from "@mui/material";
import { CgArrowDownO } from "react-icons/cg";

const HeaderDown = () => {
    const scrollContactHandler = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      };
    return (
        <div>
          <Stack sx={{ pb: 5 }}>
            <IconButton size="large" onClick={scrollContactHandler}>
              <CgArrowDownO
                color="white"
                // height={iconHeight}
                // width={iconHeight}
              ></CgArrowDownO>
            </IconButton>
          </Stack>
        </div>
    )
}

export default HeaderDown;