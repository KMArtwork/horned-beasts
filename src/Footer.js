import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.author = props.author;
    }

    render() {
        return (
            <footer>
                <span>Created by {this.author}</span>
            </footer>
        )
    }
}

export default Footer;