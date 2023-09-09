import React from "react";

import { Grid, TextField } from "@mui/material";

// FilterTable component renders a filter box with dynamic select options and a search field
function FilterTable({ filters, title = "Filters", haveSwitch }) {
  // Get borderRadius from Redux state

  const length = haveSwitch ? filters.length + 1 : filters.length;
  const flex = 100 / length - 1;
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="space-between"
        style={{ borderRadius: 12, backgroundColor: "white" }}
        sx={{
          p: 2,
          mb: 2,
          width: { xs: "97%", sm: "100%" },
          margin: "8px auto",
        }}
      >
        {/* Render SwitchContent if haveSwitch is true */}

        {/* Render TextField components with options based on filters */}
        <Grid container justifyContent="space-between" alignItems="center">
          {filters?.map((v, i) => {
            return (
              <Grid
                item
                key={i}
                sx={{ flexGrow: 1 }}
                mr={1}
                xs={12}
                sm={5.8}
                mb={1}
                md={2.8}
              >
                <TextField
                  //   select
                  label={v.label}
                  value=""
                  onChange={() => {}}
                  fullWidth
                  variant="outlined"
                  style={{ borderRadius: borderRadius }}
                ></TextField>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FilterTable;
