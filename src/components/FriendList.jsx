import css from './FriendList.module.css';
import friends from '../json/friends.json';
import FriendListItem from './FriendListItem';

const FriendList = () => {
  return (
    <ul className={css.friend__list}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend}/>
      ))}
    </ul>
  )
}


export default FriendList;