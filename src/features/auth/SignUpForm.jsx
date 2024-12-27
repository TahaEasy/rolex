import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";

import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import ButtonBox from "../../ui/ButtonBox";
import Spinner from "../../ui/Spinner";

const SignUpForm = () => {
  const { signup, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputRow label="نام:" error={errors.name ? errors.name.message : ""}>
        <Input
          type="text"
          {...register("name", {
            required: "این کادر الزامی است!",
          })}
        />
      </InputRow>
      <InputRow label="ایمیل:" error={errors.email ? errors.email.message : ""}>
        <Input
          type="text"
          {...register("email", {
            required: "این کادر الزامی است!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "لطفا یک ایمیل صحیح وارد کنید!",
            },
          })}
        />
      </InputRow>
      <InputRow
        label="رمز عبور:"
        error={errors.password ? errors.password.message : ""}
      >
        <Input
          type="password"
          {...register("password", {
            required: "این کادر الزامی است!",
            minLength: {
              value: 8,
              message: "رمز باید حداقل 8 کاراکتر داشته باشد!",
            },
          })}
        />
      </InputRow>
      <ButtonBox>
        {isLoading ? <Spinner color="var(--color-white)" /> : "ثبت نام"}
      </ButtonBox>
    </form>
  );
};

export default SignUpForm;
