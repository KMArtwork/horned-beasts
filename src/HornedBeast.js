import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';

// class HornedBeast extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.title = props.title;
//         // this.imageUrl = props.imageUrl;
//         // this.description = props.description;

//         this.state = {
//             favorites: 0,
//         }
//     }

function HornedBeast(props) {

    const [favorites, setFavorites] = useState(0);

    const handleClick = () => {
        // this.setState({ favorites: this.state.favorites + 1 });
        setFavorites(favorites + 1);
    }

    // render() {
        return(
            <Card style={{width: '400px', margin: '1rem', backgroundColor: 'blue', color: 'white'}}>
                <Card.Header as='h4'>{props.title}</Card.Header>
                <Card.Img 
                    onClick={() => props.handleCardClick(props.beast)} 
                    variant="top" 
                    src={props.imageUrl} 
                    alt={props.description} 
                    title={props.title} 
                    style={{width: 'auto', height: '400px',}}
                />
                <Card.Body>
                    {/* <Card.Title>{title}</Card.Title> */}
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={handleClick} style={{fontSize: '1.2rem',}}><span id='heart'>♥</span> x {favorites}</Button>
                <SelectedBeast />
            </Card>
        )
    }
// }

export default HornedBeast;