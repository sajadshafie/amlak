import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { alpha, styled } from "@mui/material/styles";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import LockPersonIcon from "@mui/icons-material/LockPerson";
type stepType = {
  steps: string[];
  activeStep: number;
};

const Steper: React.FC<Partial<stepType>> = (props) => {
  const theme = useTheme();
  const StepperSx = {
    "& .MuiStepConnector-root": {
      left: "calc(50% + 40px)",
      right: "calc(-50% + 40px)",
    },
    "& .MuiStepConnector-line": {
      marginTop: "15px",
    },
  };
  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: theme.palette.primary.yellow,
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundColor: alpha(theme.palette.primary.yellow, 0.7),
    }),
  }));

  function ColorlibStepIcon(props: any) {
    const { active, completed, className } = props;
    console.log(completed, active);
    const icons: { [index: string]: React.ReactElement } = {
      1: active ? (
        <HowToRegIcon />
      ) : completed ? (
        <CheckIcon />
      ) : (
        <HowToRegIcon />
      ),
      2: active ? (
        <MobileFriendlyIcon />
      ) : completed ? (
        <CheckIcon />
      ) : (
        <MobileFriendlyIcon />
      ),
      3: active ? (
        <LockPersonIcon />
      ) : completed ? (
        <CheckIcon />
      ) : (
        <LockPersonIcon />
      ),
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  return (
    <Box sx={{ width: "100%", direction: "rtl" }}>
      <Stepper sx={StepperSx} activeStep={props.activeStep} alternativeLabel>
        {props.steps?.map((label: string) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Steper;
