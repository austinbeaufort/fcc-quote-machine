import React, {Component} from 'react';
import Author from '../Author/Author';
import TweetButton from '../TweetButton/TweetButton';
import Quote from '../Quote/Quote';
import styles from './QuoteBox.module.css';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(results => {
            return results.json();
        }).then(data => {
            let quoteObj = data.quotes[Math.ceil(Math.random() * 102)];
            let quote = quoteObj.quote;
            let author = quoteObj.author;
            this.setState({
                quote: quote,
                author: author
            });
        })
    }

    render() {
        return (
        <div className={styles.container}>
            <Quote quote={this.state.quote}/>
            <Author author={this.state.author}/>
            <button className={styles.btn} id="new-quote" onClick={() => this.componentDidMount()}>New Quote</button>
            <TweetButton />
        </div>
        )
    }
}

export default QuoteBox;