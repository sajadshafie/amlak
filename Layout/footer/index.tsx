import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import { Footeritem } from "./items";
type typeItem = {
  title: string;
  children: string[];
};

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      mt={20}
      sx={{
        backgroundImage: `linear-gradient(#024f86,${theme.palette.primary.main})`,
      }}
    >
      <Grid
        display={"flex"}
        sx={{
          px: { xs: 5, sm: 7, md: 9, xl: 11 },
          py: { xs: 5, sm: 7, md: 9, xl: 11 },
          width: { xs: "100%", sm: "70%", md: "60%" },
        }}
        justifyContent={"space-between"}
      >
        {Footeritem.map((v: typeItem, i: number) => {
          return (
            <Grid>
              <Typography variant="h4" mb={4} sx={{ color: "white" }}>
                {v.title}
              </Typography>
              {v.children.map((item: string, index: number) => {
                return (
                  <Typography
                    variant="h6"
                    mb={1}
                    sx={{ color: "white", cursor: "pointer" }}
                    className="text_underline"
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
      <Grid
        height={"200px"}
        sx={{
          width: { xs: "100%", sm: "90%", md: "70%", xl: "750px" },
          marginRight: "auto",
        }}
      >
        <Appimage src="/images/footer/footer.webp" />
      </Grid>
    </Grid>
  );
};

export default Footer;
