import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendListItem ({avatar, name, isOnline}){
    const cssClassForStatus = isOnline ? styles.online : styles.offline;
    return(
        <li className={styles.list}>
            <span className={cssClassForStatus}></span>
            <img className={styles.image} src={avatar} alt="avatar" width="48"/>
            <p className={styles.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar : PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline :PropTypes.bool.isRequired
}

export default FriendListItem;