import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.beasts = props.beasts;
        this.beastComponents = [];
    }

    createHornedBeastComponents(beastArr) {
        beastArr.forEach(beast => {
            this.beastComponents.push(<HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />);
        })
    }

    render() {
        this.createHornedBeastComponents(this.beasts);
        return (
            <main>
                {this.beastComponents[0]}
                {this.beastComponents[1]}
                {this.beastComponents[2]}
            </main>
        )
    }
}

export default Main;