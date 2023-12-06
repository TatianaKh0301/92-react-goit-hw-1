import user from '../../../src/user.json';
import data from '../../../src/data.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { AppWrap } from './App.styled';

export const App = () => {
  return (
    <AppWrap>
      <Profile  
          username={user.username} 
          avatar={user.avatar} 
          tag={user.tag} 
          location={user.location} 
          stats={user.stats} 
      />
      <Statistics 
          title="Upload stats" 
          stats={data} />
      <Statistics
          stats={data} 
      />
    </AppWrap>
  );
};
