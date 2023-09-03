import React, { ChangeEvent, RefObject } from "react";
import { Typography, TextFieldProps } from "@mui/material";
import { ValidatorComponent } from "react-material-ui-form-validator";
import Appinput from "@/common/Appinput";

type AppTextValidatorProps = TextFieldProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessages: string[];
  validators?: string[];
  requiredError?: string;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  type?: string;
};
interface AppTextValidatorState {
  isValid: boolean;
}
class AppTextValidator extends ValidatorComponent<
  Partial<AppTextValidatorProps, AppTextValidatorState>
> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: AppTextValidatorProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  renderValidatorComponent() {
    const {
      onChange,
      errorMessages,
      validators,
      requiredError,
      value,
      placeholder,
      fullWidth,
      type,
      ...rest
    } = this.props;

    return (
      <>
        <Appinput
          type={type}
          error={!this.state.isValid}
          fullWidth={fullWidth}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minRows={4}
          {...rest}
          ref={this.inputRef}
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
