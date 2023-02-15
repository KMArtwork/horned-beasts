import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorMode: 0,
            title: props.title,
            colorVersion: 'Blue Version'
        }
    }

    handleClick = () => {
        if (this.state.colorMode === 0) {
            this.setState({ colorMode: 1, colorVersion: 'Red Version' });
            document.querySelector('header').style.backgroundColor = 'rgb(77, 17, 17)';
            document.querySelector('main').style.backgroundColor = 'rgb(97, 47, 47)';
            document.querySelector('footer').style.backgroundColor = 'rgb(77, 17, 17)';
            let cards = document.querySelectorAll('div .card');
            cards.forEach(card => card.style.backgroundColor = 'red');
            let buttons = document.querySelectorAll('button');
            buttons.forEach(button => button.style.backgroundColor = 'darkred');
            let hearts = document.querySelectorAll('#heart');
            hearts.forEach(heart => heart.style.color = 'deepskyblue');
        } else if (this.state.colorMode === 1) {
            this.setState({ colorMode: 0, colorVersion: 'Blue Version'})
            document.querySelector('header').style.backgroundColor = 'rgb(17, 28, 77)';
            document.querySelector('main').style.backgroundColor = 'rgb(47, 56, 99)';
            document.querySelector('footer').style.backgroundColor = 'rgb(17, 28, 77)';
            let cards = document.querySelectorAll('div .card');
            cards.forEach(card => card.style.backgroundColor = 'blue');
            let buttons = document.querySelectorAll('button');
            buttons.forEach(button => {button.style.backgroundColor = '#0d6efd';});
            let hearts = document.querySelectorAll('#heart');
            hearts.forEach(heart => heart.style.color = 'red');
        }
    }

    render() {
        return (
            <header onClick={this.handleClick} style={{cursor: 'pointer'}}>
                <h1>{this.state.title + ': ' + this.state.colorVersion}</h1>
                <h4>Gotta React 'Em All</h4>
            </header>
        )
    }
}

export default Header;