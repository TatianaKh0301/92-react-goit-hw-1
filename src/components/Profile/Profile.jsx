import { ProfileWrap, ProfileInfo, Description, Avatar } from "./Profile.styled";
export const Profile = ({ username, avatar, tag, location, stats }) => {
    const { followers, views, likes} = stats;
    return (
        <ProfileWrap>
            <ProfileInfo>
                <Description>
                    <Avatar src={avatar} alt="User avatar" />
                    <p class="name">{username}</p>
                    <p class="tag">{tag}</p>
                    <p class="location">{location}</p>
                </Description>

                <ul class="stats">
                    <li>
                        <span class="label">Followers</span>
                        <span class="quantity">{followers}</span>
                    </li>
                    <li>
                        <span class="label">Views</span>
                        <span class="quantity">{views}</span>
                    </li>
                    <li>
                        <span class="label">Likes</span>
                        <span class="quantity">{likes}</span>
                    </li>
                </ul>
            </ProfileInfo>            
        </ProfileWrap>
    );
};