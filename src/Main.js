import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.beasts = props.beasts;
        this.beastComponents = [];
    }

    createHornedBeastComponents(beastArr) {
        beastArr.map(beast => {
            <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
        })
    }

    render() {
        // this.createHornedBeastComponents(this.beasts);
        return (
            <main>
               {this.beasts.map(beast => {
                return <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                })}
            </main>
        )
    }
}

export default Main;