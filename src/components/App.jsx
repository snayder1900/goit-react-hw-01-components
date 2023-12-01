import user from '../json/user.json';
import data from '../json/data.json';
import transactions from '../json/transactions.json';
import Profile from "./Profile.jsx";
import Statistics from './Statistics.jsx';
import FriendsList from './FriendList.jsx';
import TransactionHistory from './TransactionHistory.jsx';



export const App = () => {
  return (
    <div
      style={{
        paddingBlockStart: '16px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 41,
        color: '#010101'
      }}
    >
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title='UPLOAD STATS' stats={data} />
      <Statistics stats={data} />
      <FriendsList/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
