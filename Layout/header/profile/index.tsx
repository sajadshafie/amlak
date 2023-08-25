import React from "react";
import { Box, Typography } from "@mui/material";

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
        پروفایل من
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        className="text_transition_sub"
        mb={1}
        variant="subtitle2"
      >
        تنظیمات
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        className="text_transition_sub"
        variant="subtitle2"
      >
        خروج
      </Typography>
    </Box>
  );
};

export default Profile;
