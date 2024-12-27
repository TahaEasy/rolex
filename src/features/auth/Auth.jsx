import { LuUser } from "react-icons/lu";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import AuthFormLayout from "./AuthFormLayout";
import { useUser } from "./useUser";
import Logout from "./Logout";

const Auth = () => {
  const { user } = useUser();

  if (user !== null || user?.length < 0) return <Logout />;

  return (
    <Modal>
      <Modal.Open open="auth">
        <ButtonIcon icon={<LuUser />} />
      </Modal.Open>
      <Modal.Window name="auth">
        <AuthFormLayout />
      </Modal.Window>
    </Modal>
  );
};

export default Auth;
