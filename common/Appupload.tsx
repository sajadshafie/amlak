import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const FileUpload: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button fullWidth variant="outlined" component="label" sx={{ p: 1.5 }}>
        <Typography variant="h6" textAlign={"center"}>
          محل بارگذاری عکس
        </Typography>
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
};

export default FileUpload;
