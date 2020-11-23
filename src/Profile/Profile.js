import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, imgUrl, followers, views, likes }) => (
  <div className={styles.upper_wrapper}>
    <div className={styles.wrapper}>
      <img className={styles.image} src={imgUrl} alt="avatar" />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      <div className={styles.stats}>
        <div className={styles.stats_wrapper}>
          <span className={styles.showing}>Followers</span>
          <span className={styles.followers}>{followers}</span>
        </div>
        <div className={styles.stats_wrapper}>
          <span className={styles.showing}>Views</span>
          <span className={styles.views}>{views}</span>
        </div>
        <div className={styles.stats_wrapper}>
          <span className={styles.showing}>Likes</span>
          <span className={styles.likes}>{likes}</span>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
