import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendListItem";
import styles from "./FriendList.module.css"

function FriendList ({friends}) {
    return(
        <div className={styles.wrapper}>
            <ul className={styles.wrapper_list}>
            {friends.map(friend => (<FriendsListItem key={friend.id.toString()}
            avatar = {friend.avatar}
            name= {friend.name}
            isOnline={friend.isOnline}/>))}
            </ul>
        </div>
    )
}
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
  };

export default FriendList;