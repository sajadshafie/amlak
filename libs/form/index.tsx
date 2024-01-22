import React from "react";
import { useForm } from "react-hook-form";
import Appinput from "@/common/Appinput";
import global from "@/global";
import { GlobalTypes } from "@/types";

type propsType={
  formData:GlobalTypes.formType
}

const Form: React.FC<propsType> = (props) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => clearErrors())}>
      <Appinput
        inputProps={{
          ...register("email", {
            required: "Email is required",
            pattern: {
              value: global.patternEmail,
              message: "Invalid email address",
            },
          }),
        }}
        label="Email"
        type="email"
        error={Boolean(errors.email)}
        helperText={errors.email?.message?.toString()}
      />

      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
};

export default Form;
