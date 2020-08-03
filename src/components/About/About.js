import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {

    // static defaultProps = {};    

    // constructor(props) {
    //     super(props);
    //     this.onClickBegin = this.onClickBegin.bind(this);
    // }

    render() {
        return (
            <div className="main">
                <div className="container centered">
                    <h1>About</h1>
                    <p>Hi! I'm Chatchawan L Suwaratana, an aspiring fullstack webdeveloper! I'd love for you to check out my other projects here!</p>
                    LINK TO GITHUB
                    <p>And if you'd like, you can follow my progress on social media!</p>
                    SOCIAL MEDIA LINKS
                </div>
                <div className="container centered">
                    <Link to='/'><button>Back</button></Link>
                </div>
            </div>
        )
    }
}
