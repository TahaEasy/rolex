import styled from "styled-components";
import { useUser } from "./useUser";
import { useIsUser } from "../../hooks/useIsUser";

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.img`
  height: 2rem;
  width: 2rem;
`;

const UserAvatar = () => {
  const { user = { user_metadata: {} } } = useUser();
  const isUser = useIsUser();

  if (!isUser)
    return (
      <AvatarContainer>
        <p>مهمان</p>
        <Avatar>
          <AvatarImage src="/default-user.png" />
        </Avatar>
      </AvatarContainer>
    );

  const { fullName, avatar } = user.user_metadata;

  return (
    <AvatarContainer>
      <p>{fullName}</p>
      <Avatar>
        <AvatarImage src={avatar || "/default-user.png"} />
      </Avatar>
    </AvatarContainer>
  );
};

export default UserAvatar;
