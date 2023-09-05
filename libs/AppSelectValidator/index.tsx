import React, { ChangeEvent, RefObject } from "react";
import { Typography, TextFieldProps } from "@mui/material";
import { ValidatorComponent } from "react-material-ui-form-validator";
import Appselect from "@/common/Appselect";

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
class AppSelectValidator extends ValidatorComponent<
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
      variant,
      type,
      options,
      ...rest
    } = this.props;

    return (
      <>
        <Appselect
          options={options}
          type={type}
          variant={variant}
          error={!this.state.isValid}
          fullWidth={fullWidth}
          value={value}
          handleChange={onChange}
          placeholder={placeholder}
          value={this.props.value}
          {...rest}
          ref={this.inputRef}
          message={this.errorText()}
        />
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

export default AppSelectValidator;
