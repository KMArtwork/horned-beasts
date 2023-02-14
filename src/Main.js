import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <HornedBeast title="Rhino Beetle" imageUrl="https://i.natgeofe.com/n/eecb9f72-d494-4894-9612-6a7adcb4bb8d/Japanese-rhino-beetle_4x3.jpg" description="A rhino beetle" />
                <HornedBeast title="Tauros" imageUrl="https://img.pokemondb.net/artwork/large/tauros-blaze.jpg" description="A Tauros from the Paldea region" />
            </div>
        )
    }
}

export default Main;