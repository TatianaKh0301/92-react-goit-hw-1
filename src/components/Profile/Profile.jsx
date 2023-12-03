import PropTypes from 'prop-types';
import { ProfileWrap, ProfileInfo, Description, ProfileAvatar, TextWrap, Name, Tag, Location, Stats, StatsItem, StatsItemContainer, Quantity, Label } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    const {followers, views, likes} = stats;
    return (
        <ProfileWrap>
            <ProfileInfo key={username}>
                <Description>
                    <ProfileAvatar
                        src={avatar}
                        alt="User avatar"
                    />
                    <TextWrap>
                        <Name>{username}</Name>
                        <Tag>`@${tag}`</Tag>
                        <Location>{location}</Location>
                    </TextWrap>                    
                </Description>

                <Stats>
                    <StatsItem>
                        <StatsItemContainer>
                            <Label>Followers</Label>
                            <Quantity>{followers}</Quantity>
                        </StatsItemContainer>                       
                    </StatsItem>
                    <StatsItem>
                        <StatsItemContainer>
                            <Label>Views</Label>
                            <Quantity>{views}</Quantity>
                        </StatsItemContainer>                        
                    </StatsItem>
                    <StatsItem>
                        <StatsItemContainer>
                            <Label>Likes</Label>
                            <Quantity>{likes}</Quantity>
                        </StatsItemContainer>                       
                    </StatsItem>
                </Stats>
            </ProfileInfo>
        </ProfileWrap>
);
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
      }).isRequired,
}
