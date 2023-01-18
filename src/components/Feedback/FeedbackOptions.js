import React from 'react';
import PropTypes from "prop-types";
import css from './Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
<div className={css.group}>
    {options.map( option => {
     return (<button key={option} className={css.list} onClick={() => onLeaveFeedback(option)}>{option}</button>)
    })}
</div>
)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired)
}
export default FeedbackOptions;