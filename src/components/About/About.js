import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import back from '../../img/back_button.png';


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
                    <p>Hi! I'm Chatchawan L Suwaratana, and I made this app as a fullstack practice project for the Thinkful bootcamp. I'll update it over time with new stuff!</p>
                    <h2>Thanks to</h2>
                    <p><b>Sunitha Kandalam</b>, my TA, for her daily check-ins to keep me on track!</p>
                    <p><b>Nash Worth</b>, my mentor, for his pep talks and advice!</p>
                    <a href="https://github.com/jenthura/adventurandom">Github repository</a>
                    <p>If you'd like, you can follow my progress!</p>
                    <a href="https://twitter.com/home">Twitter</a>
                </div>
                <div className="container centered">
                    <Link to='/'><img src={back} alt='back_button' /></Link>
                </div>
            </div>
        )
    }
}
