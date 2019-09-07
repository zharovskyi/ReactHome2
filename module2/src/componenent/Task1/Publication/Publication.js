import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';
const Publication = ({ title, text }) => {
    return (
        <article className={style.publication}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
};
Publication.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default Publication;