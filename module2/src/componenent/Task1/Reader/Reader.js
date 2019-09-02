import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import style from './Reader.module.css';

class Reader extends Component {
    state = {
        elNumber: this.props.startValue,
    };

    static defaultProps = {
        step: 1,
        startValue: 1,
    };

    static propTypes = {
        step: PropTypes.number,
        startValue: PropTypes.number,
    };

    handleIncrement = () => {
        this.setState(state => ({
            elNumber: state.elNumber + this.props.step,
        }));
    };

    handleDecrement = () => {
        this.setState(state => ({
            elNumber: state.elNumber - 1,
        }));
    };

    render() {
        const { items } = this.props;
        const { elNumber } = this.state;

        return (
            <div className={style.reader}>
                <Publication
                    title={items[elNumber - 1].title}
                    text={items[elNumber - 1].text}
                />
                <Counter
                    items={items}
                    elNumber={elNumber}
                    onHandleIncrement={this.handleIncrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

export default Reader;