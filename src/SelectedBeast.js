import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    render() {
        return(
            <Modal centered size='lg' show={this.props.show} onHide={this.props.handleOnHide} >
                <Modal.Header closeButton>
                    <Modal.Title >
                        {this.props.title}
                        <p style={{textAlign: 'center', fontSize: '0.85rem', margin: 0}}>Horns: {this.props.horns}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={this.props.img} alt={this.props.description} style={{maxWidth: '500px', height: 'auto'}} />
                    <p>{this.props.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast;