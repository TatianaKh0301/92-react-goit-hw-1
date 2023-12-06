import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendListAll } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return(
        <FriendListAll>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem 
                        avatar={friend.avatar} 
                        name={friend.name} 
                        isOnline={friend.isOnline}
                    />
                </li>
            ) 
            )}
        </FriendListAll>
    );
};