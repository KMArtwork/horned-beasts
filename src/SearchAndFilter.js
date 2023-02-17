import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchAndFilter extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            
        }

    }

    handleSelect = (event) => {
        this.props.handleHornFilter(event);
    }

    render() {
        return (
            <Form onChange={this.handleSelect}>
                <Form.Select>
                    <option value='0'>All</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='100'>One-Hundred</option>
                </Form.Select>
            </Form>
        )
    }
}

export default SearchAndFilter;