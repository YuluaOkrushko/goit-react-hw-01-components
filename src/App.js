import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList  from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import user from './Profile/user.json';
import statistic from './Statistics/statistical-data.json';
import friends from "./FriendList/friends.json"
import transactions from "./TransactionHistory/transactions.json"


function App() {
  return (
    <div>
      <Profile
        imgUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statistic} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}
export default App;
