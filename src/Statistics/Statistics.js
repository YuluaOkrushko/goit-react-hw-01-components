import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.upper_wrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={styles.li}
              style={{ backgroundColor: random_bg_color() }}
            >
              <span className={styles.label}>{stat.label}</span>
              <p className={styles.percentage}>{stat.percentage}%</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
Statistics.defaultProps = {
  title: 'upload stats',
};

export default Statistics;
