import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <header>
                <h1>{this.title}</h1>
            </header>
        )
    }
}

export default Header;