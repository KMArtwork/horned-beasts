import React, { useState } from 'react';
// import Image from 'react-bootstrap/Image'
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';

// class Main extends React.Component {
//     constructor(props){
//         super(props);
//         this.beasts = this.props.data;
//     };

    function Main(props) {

    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
        // console.log('test');
        // console.log(cardData);
        openModal();
    }

    const openModal = () => {
        setShowModal(true);
        console.log(selectedCard);
    }

    const closeModal = () => {
        setShowModal(false);
    }

        return (
            <main>
                {props.data.map(beast => {
                    return <HornedBeast beast={beast} title={beast.title} imageUrl={beast.image_url} description={beast.description} openModal={openModal} handleCardClick={handleCardClick} />
                })}
                <SelectedBeast 
                show={showModal} 
                handleClose={closeModal} 
                title={selectedCard.title} 
                img={selectedCard.image_url}
                description={selectedCard.description}
                horns={selectedCard.horns}
                ></SelectedBeast>
            </main>
        )
    }

export default Main;