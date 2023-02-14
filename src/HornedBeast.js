import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.imageUrl = props.imageUrl;
        this.description = props.description;

        this.state = {
            favorites: 0,
        }
    }

    handleClick = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return(
            <div class="beastBox" onClick={this.handleClick}>
                <h2>{this.title}</h2>
                <p id='favoriteCount'><span id='heart'>♥</span> x <span>{this.state.favorites}</span></p>
                <img src={this.imageUrl} alt={this.description} title={this.title} width="400" height='400' />
                <p>{this.description}</p>
            </div>
        )
        
    }
}

export default HornedBeast;