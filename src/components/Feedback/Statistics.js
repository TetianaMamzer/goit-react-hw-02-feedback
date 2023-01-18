import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>{ 
  return (
  <>
    <p className={css.statistic}>Good: {good}</p>
    <p className={css.statistic}>Neutral: {neutral}</p>
    <p className={css.statistic}>Bad: {bad}</p>
    <p className={css.statistic}>Total: {total}</p>
    <p className={css.statistic}>Positive feedback: {positivePercentage}%</p>
  </>
)};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.string.isRequired
}

export default Statistics;