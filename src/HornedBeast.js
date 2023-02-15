import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            // <div class="beastBox" onClick={this.handleClick}>
            //     <h2>{this.title}</h2>
            //     <p id='favoriteCount'><span id='heart'>♥</span> x <span>{this.state.favorites}</span></p>
            //     <img src={this.imageUrl} alt={this.description} title={this.title} width="400" height='400' />
            //     <p>{this.description}</p>
            // </div>

            <Card style={{width: '400px', margin: '1rem'}}>
                <Card.Header as='h4'>{this.title}</Card.Header>
                <Card.Img variant="top" src={this.imageUrl} alt={this.description} title={this.title} style={{width: 'auto', height: '400px',}}/>
                <Card.Body>
                    {/* <Card.Title>{this.title}</Card.Title> */}
                    <Card.Text>{this.description}</Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={this.handleClick} style={{fontSize: '1.2rem',}}><span id='heart'>♥</span> x {this.state.favorites}</Button>
            </Card>
        )
        
    }
}

export default HornedBeast;