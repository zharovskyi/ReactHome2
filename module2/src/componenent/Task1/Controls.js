import React from 'react';
import PropTypes from 'prop-types';
import style from './Reader/Reader.module.css';

const Controls = ({
    items,
    elNumber,
    onHandleIncrement,
    onHandleDecrement,
}) => {
    return (
        <div className={style.controls}>
            <button
                className={elNumber === 1 ? style.disabled : style.button}
                onClick={onHandleDecrement}
                type="button"
            >
                PREV
      </button>
            <button
                className={elNumber === items.length ? style.disabled : style.button}
                onClick={onHandleIncrement}
                type="button"
            >
                NEXT
      </button>
        </div>
    );
};

Controls.propTypes = {
    onHandleIncrement: PropTypes.func.isRequired,
    onHandleDecrement: PropTypes.func.isRequired,
};

export default Controls;

