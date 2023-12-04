import user from '../../src/user.json';
import data from '../../src/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile  
          username={user.username} 
          avatar={user.avatar} 
          tag={user.tag} 
          location={user.location} 
          stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
