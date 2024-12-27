import { useForm } from "react-hook-form";
import ButtonBox from "../../ui/ButtonBox";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import { useSignIn } from "./useSignIn";
import Spinner from "../../ui/Spinner";

const SignInForm = () => {
  const { signin, isLoading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signin(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          })}
        />
      </InputRow>
      <ButtonBox>
        {isLoading ? <Spinner color="var(--color-white)" /> : "ورود"}
      </ButtonBox>
    </form>
  );
};

export default SignInForm;
