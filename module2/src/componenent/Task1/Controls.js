import React from 'react';
import PropTypes from 'prop-types';
import style from './Reader/Reader.module.css';

const Controls = ({
    items,
    elNumber,
    onHandleIncrement,
    onHandleDecrement,
}) => {
    let leftDisabled
    let rightDisabled;
    if (elNumber === 1) {
        leftDisabled = 'disabled';
    } else if (elNumber === items.length) {
        rightDisabled = 'disabled'
    }

    return (
        <div className={style.controls}>
            <button
                className={elNumber === 1 ? style.disabled : style.button}
                onClick={onHandleDecrement}
                type="button"
                disabled={leftDisabled}
            >
                PREV
      </button>
            <button
                className={elNumber === items.length ? style.disabled : style.button}
                onClick={onHandleIncrement}
                type="button"
                disabled={rightDisabled}
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

