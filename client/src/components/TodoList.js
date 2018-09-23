import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition, 
    TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class TodoList extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };
    
    render() {
        const { items } = this.props.item;
        return (
            <Container>
               
                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {items.map(({_id, name, subtask}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <p
                                 className="text-primary"
                                >
                                {name} 
                            <span
                                className=" ml-2"
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={this.onDeleteClick.bind(this, _id)}
                                >
                                     &times;
                                </span>
                                  
                                </p>
                                   {/* 
                                <ul>
                                    {subtask.map((subItem) => (

                                        <li key={subItem + uuid} className="text-danger">
                                            {subItem}
                                        <span

                                        onClick={() => {

                                        }}
                                        > &times;</span>
                                    </li>
                                    ))}
                                </ul>
                                
                                
                                */} 
                                    
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

TodoList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(TodoList);

