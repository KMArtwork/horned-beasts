import React from 'react';
// import Image from 'react-bootstrap/Image'
// import data from './data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    constructor(props){
        super(props);
        console.log('evade useless constructor warning');
    }

    render() {
        return (
            <main>
                {this.props.data.map(beast => {
                    return <HornedBeast beast={beast} updateModalBeast={this.props.updateModalBeast} />
                })}
            </main>
        )
    }
}

export default Main;