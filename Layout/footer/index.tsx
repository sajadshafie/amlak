import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import { Footeritem } from "./items";
type typeItem = {
  title: string;
  children: string[];
};

type iconsType = {
  image: string;
  width: string;
};

const Footer: React.FC = () => {
  const theme = useTheme();
  const icons: iconsType[] = [
    { image: "/images/footer/telegram.png", width: "50px" },
    { image: "/images/footer/instagram.png", width: "35px" },
    { image: "/images/footer/whatsapp.png", width: "45px" },
  ];

  return (
    <Grid
      mt={20}
      sx={{
        backgroundImage: `linear-gradient(#024f86,${theme.palette.primary.main})`,
        position: "relative",
        pb: "200px",
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
        <Grid>
          <Typography variant="h4" mb={4} sx={{ color: "white" }}>
            راه ها ارتباطی با ما
          </Typography>
          <Grid display={"flex"} alignItems={"center"}>
            {icons.map((v: iconsType, i: number) => {
              return (
                <Grid
                  sx={{
                    cursor: "pointer",
                    width: v.width,
                    height: "40px",
                    ml: 1,
                  }}
                  key={i}
                >
                  <Appimage src={v.image} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        height={"400px"}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
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
