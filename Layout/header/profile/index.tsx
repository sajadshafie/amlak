import React from "react";
import { Box, Typography } from "@mui/material";
import Applink2 from "@/common/Applink2";
const Profile: React.FC<{ isLoging?: boolean }> = (props) => {
  const listPanel = [
    {
      text: "ورود به پنل کاربری",
      link: "/provider",
    },
  ];
  const listNotLogin = [
    {
      text: "ثبت نام فروشنده",
      link: "/register",
    },
    {
      text: "ورود فروشنده",
      link: "/login",
    },
  ];
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "white",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {(props.isLoging ? listPanel : listNotLogin).map((v, i) => {
        return (
          <Typography
            sx={{
              cursor: "pointer",
            }}
            className="text_transition_sub"
            mb={1}
            variant="subtitle2"
          >
            <Applink2 text={v.text} link={v.link} />
          </Typography>
        );
      })}
    </Box>
  );
};

export default Profile;
