import React from 'react';
import styles from './Quote.module.css';

const quote = props => {
    return (
        <h2 className={styles.quote} id="text">{props.quote}</h2>
    )
}

export default quote;