import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.beasts = data;
    }

    render() {
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