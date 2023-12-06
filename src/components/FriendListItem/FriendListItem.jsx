import { Avatar, FriendWrap, Name, Status } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <FriendWrap>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendWrap>
    );
}