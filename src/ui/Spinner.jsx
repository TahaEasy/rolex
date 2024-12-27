import { ClockLoader } from "react-spinners";

const Spinner = ({ color = "var(--color-primary)", size = 40, ...props }) => {
  return <ClockLoader color={color} size={size} {...props} />;
};

export default Spinner;
