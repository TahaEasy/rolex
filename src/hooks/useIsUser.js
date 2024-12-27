import { useUser } from "../features/auth/useUser";

export const useIsUser = () => {
  const { user } = useUser();

  return !(!user || !user.app_metadata || user === null);
};
