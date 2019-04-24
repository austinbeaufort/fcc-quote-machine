import React from 'react';
import styles from './TweetButton.module.css';

const tweetButton = props => {
    return (
    <React.Fragment>
        <a href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank" id="tweet-quote"><button className={styles.btn}>Tweet Quote!</button></a>
    </React.Fragment>
    )
}

export default tweetButton;
