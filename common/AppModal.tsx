import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type modalTypes = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  height: string;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,

  overflow: "auto",
};

const AppModal: React.FC<Partial<modalTypes>> = (props) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open ? props.open : false}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box
          sx={{
            ...style,
            width: { xs: "90%", sm: "80%", md: "50%" },
            height: props.height ? props.height : "500px",
            margin: "0 auto",
            // position: "relative",
          }}
        >
          <IconButton
            onClick={props.onClose}
            sx={{
              position: "absolute",
              left: "10px",
              top: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
          {props.children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppModal;
