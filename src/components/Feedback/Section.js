import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Section = ({title, children}) => (
  <div className={css.container}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section;