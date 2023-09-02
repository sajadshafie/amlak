import React from "react";
import { ValidatorComponent } from "react-material-ui-form-validator";
import { Typography } from "@mui/material";
import Appinput from "@/common/Appinput";
// import Textarea from '@mui/joy/Textarea';
class AppTextValidator extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      onChange,
      errorMessages,
      validators,
      requiredError,
      value,
      placeholder,
      fullWidth,
      ...rest
    } = this.props;

    return (
      <>
        <Appinput
          error={!this.state.isValid}
          fullWidth={fullWidth}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minRows={4}
          {...rest}
          ref={(r) => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <Typography
        sx={{
          color: "#d32f2f",
          fontSize: "0.8rem",
          marginLeft: "15px",
        }}
      >
        {this.getErrorMessage()}
      </Typography>
    );
  }
}

export default AppTextValidator;
