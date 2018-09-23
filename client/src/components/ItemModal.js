import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                  color="dark"
                  className="mb-5"
                  onClick={this.toggle}
                >
                    Add task
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to list
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label fro="item">Task</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="task"
                                    placeholder="Add task"
                                    onChange={this.onChange}
                                />
                                <Button
                                color="dark"
                                block
                                  className="mt-3"
                                >Add task</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
