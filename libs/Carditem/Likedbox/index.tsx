import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, useTheme } from "@mui/material";

type propsLiked = {
  hanldeLike: (val: boolean) => void;
};

const Likedbox: React.FC<Partial<propsLiked>> = (props) => {
  const theme = useTheme();
  const [isLike, setIsLike] = useState<boolean>(false);
  const clickLike = () => {
    setIsLike(!isLike);
    props.hanldeLike(!isLike);
  };
  return (
    <Grid
      onClick={clickLike}
      sx={{
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 100,
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLike ? (
        <FavoriteIcon sx={{ fontSize: 20, color: theme.palette.error.main }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: 20 }} />
      )}
    </Grid>
  );
};

export default Likedbox;
