import css from './FriendListItem.module.css';
import PropTypes from "prop-types";


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.friend__item}>
      <span className={`${css.item__status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.item__avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.item__name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;