import React from 'react';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={props.img} width="600" height="auto" alt={props.description} />
                <p>{props.description}</p>
                <p>{`Number of horns: ${props.horns}`}</p>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default SelectedBeast;