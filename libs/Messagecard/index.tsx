import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Appbutton from "@/common/Appbutton";
type messagecardType = {
  title: string;
  backgroundColor: string;
  backgroundColor2: string;
  subtitle: string;
  buttonText: string;
  buttonAction: () => void;
  imageSrc: string;
  buttonSecTxt: string;
  buttonSecend: () => void;
  imageHeight: string;
  subEmelemnt: boolean;
};

// CustomCard component
const CustomCard: React.FC<Partial<messagecardType>> = (props) => {
  const theme = useTheme();

  // Create gradient background from given colors
  const gradientBackground = `linear-gradient(352deg, ${props.backgroundColor} 0%, ${props.backgroundColor2} 100%)`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: `12px`,
        background: `${gradientBackground}`,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        alignItems="flex-start"
        sx={{ zIndex: 2, position: "relative" }}
      >
        {/* TEXT AREA */}
        <Grid item xs={12} md={9} sx={{ zIndex: 2 }}>
          <Grid p={3}>
            <Typography variant="h2" gutterBottom>
              {props.title}
            </Typography>
            {props.subEmelemnt ? (
              props.subtitle
            ) : (
              <Typography variant="subtitle1">{props.subtitle}</Typography>
            )}
            <Grid display={"flex"}>
              {props.buttonSecTxt && (
                <Box mr={1} mt={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={props.buttonSecend}
                  >
                    {props.buttonSecTxt}
                  </Button>
                </Box>
              )}
              {props.buttonText && (
                <Box mt={2}>
                  <Appbutton
                    sx={{ borderRadius: "12px" }}
                    variant="contained"
                    color="primary"
                    onClick={props.buttonAction}
                  >
                    {props.buttonText}
                  </Appbutton>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* IMAGE */}
        <Grid item xs={12} md={3} sx={{ zIndex: 2 }}>
          <Grid
            sx={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
              height: props.imageHeight,
            }}
          >
            <img
              src={props.imageSrc}
              alt=""
              style={{
                width: "100%",
                height: props.imageHeight,
                display: "block",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomCard;
