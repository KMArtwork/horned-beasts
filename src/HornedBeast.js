import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: 0,
        }
    }

    handleClick = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return(
            <Card bg={'primary'} style={{width: '350px', maxHeight: '462.50px', margin: '1rem', color: 'white'}}>
                <Card.Header as='h4'>{this.props.beast.title}</Card.Header>
                <Card.Img
                    onClick={() => this.props.updateModalBeast(this.props.beast)} 
                    variant="top" 
                    src={this.props.beast.image_url} 
                    alt={this.props.beast.description} 
                    title={this.props.beast.title} 
                    style={{width: 'auto', height: '250px', cursor: 'pointer'}}
                    />
                <Card.Body>
                    {/* <Card.Title>{this.props.beast.title}</Card.Title> */}
                    <Card.Text>{this.props.beast.description}</Card.Text>
                </Card.Body>
                <Button onClick={this.handleClick} style={{fontSize: '1.2rem', backgroundColor: '#00348b'}}><span id='heart'>♥</span> x {this.state.favorites}</Button>
            </Card>
        )
        
    }
}

export default HornedBeast;