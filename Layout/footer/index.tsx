import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import { Footeritem } from "./items";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
type typeItem = {
  title: string;
  children: string[];
};

const Footer: React.FC = () => {
  const theme = useTheme();
  const icons: React.ReactNode[] = [
    <TelegramIcon sx={{ fontSize: 30 }} />,
    <InstagramIcon sx={{ fontSize: 30 }} />,
    <WhatsAppIcon sx={{ fontSize: 30 }} />,
  ];

  return (
    <Grid
      mt={20}
      sx={{
        backgroundColor: theme.palette.primary.footer_bg,
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
            <Grid key={i}>
              <Typography variant="h3" mb={4}>
                {v.title}
              </Typography>
              {v.children.map((item: string, index: number) => {
                return (
                  <Typography
                    variant="body2"
                    mb={1}
                    sx={{
                      cursor: "pointer",
                      transition: "0.2s",
                      ":hover": {
                        color: theme.palette.primary.yellow300,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>
          );
        })}
        <Grid>
          <Typography variant="h4" mb={4}>
            راه ها ارتباطی با ما
          </Typography>
          <Grid display={"flex"} alignItems={"center"}>
            {icons.map((v: React.ReactNode, i: number) => {
              return (
                <Grid
                  sx={{
                    cursor: "pointer",
                    ml: 1,
                    ":hover": {
                      color: theme.palette.primary.yellow300,
                    },
                    transition: "0.2s",
                    height: "100%",
                    color: theme.palette.grey[700],
                  }}
                  key={i}
                >
                  {v}
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
