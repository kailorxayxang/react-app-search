import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        //state to set value from action
        this.state = {
            keywords:''
        }
    }

    inputChange(event) {
        //set state to get value from text when search
        this.setState({ keywords: event.target.value })
        this.props.newsSearch(event.target.value)
    }

    render() {
        return (
            <header>
                <div className="logo"
                    onClick={() => {
                        console.log('cick me')
                    }}
                >Logo</div>
                <input onChange={this.inputChange.bind(this)} />
            </header>
        )
    }
}

export default Header;