import { LuLogOut } from "react-icons/lu";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogOut } from "./useLogOut";

const Logout = () => {
  const { logout, isLoading } = useLogOut();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading} icon={<LuLogOut />} />
  );
};

export default Logout;
