import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Applink from "@/common/Applink";
import Applink2 from "@/common/Applink2";
const Profile: React.FC = () => {
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
      <Typography
        sx={{
          cursor: "pointer",
        }}
        className="text_transition_sub"
        mb={1}
        variant="subtitle2"
      >
        <Applink2 text="ثبت نام فروشنده" link="/register" />
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        className="text_transition_sub"
        mb={1}
        variant="subtitle2"
      >
        <Applink2 text="ورود فروشنده" link="/login" />
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        className="text_transition_sub"
        mb={1}
        variant="subtitle2"
      >
        <Applink2 text="ثبت آگهی" link="/provider/saveproduct" />
      </Typography>
    </Box>
  );
};

export default Profile;
