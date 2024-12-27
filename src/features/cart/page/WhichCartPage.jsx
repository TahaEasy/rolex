import { useIsUser } from "../../../hooks/useIsUser";
import CartReduxPage from "./CartReduxPage";
import CarterPage from "./CarterPage";

const WhichCartPage = () => {
  const isUser = useIsUser();
  return <>{isUser ? <CarterPage /> : <CartReduxPage />}</>;
};

export default WhichCartPage;
