import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//database
import JSON from './db.json';
//components
import Header from './components/header';
import NewList from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: JSON,
            filtered:JSON
        }
    }
    //search function
    filternews(keywords) {
        //loop with keywords
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })
        //set data to views
        this.setState({filtered})
    }
    render() {
        return(
            <div>
                <Header newsSearch={keywords=>this.filternews(keywords)} />
                <NewList news={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));