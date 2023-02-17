import React from 'react';
// import Image from 'react-bootstrap/Image'
// import data from './data.json';
import HornedBeast from './HornedBeast';
import SearchAndFilter from './SearchAndFilter';

class Main extends React.Component {
    constructor(props){
        super(props);
        console.log('evade useless constructor warning');

        this.state = {
            hornFilter: 0,
        }
    }

    handleHornFilter = (event) => {
        this.setState({hornFilter: event.target.value});
    }

    render() {
        return (
            <>  
                <SearchAndFilter handleHornFilter={this.handleHornFilter}></SearchAndFilter>
                <main>
                    {this.props.data.map(beast => {
                        // eslint-disable-next-line
                        if (this.state.hornFilter == beast.horns || this.state.hornFilter == 0) {
                            return <HornedBeast beast={beast} updateModalBeast={this.props.updateModalBeast} />
                        } else return <></>;
                    })}
                </main>
            </>
            
        )
    }
}

export default Main;