import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.imageUrl = props.imageUrl;
        this.description = props.description;
    }

    render() {
        return(
            <div class="beastBox">
                <h2>{this.title}</h2>
                <img src={this.imageUrl} alt={this.description} title={this.title} width="400" height='400' />
                <p>{this.description}</p>
            </div>
        )
        
    }
}

export default HornedBeast;