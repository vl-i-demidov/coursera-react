import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }


    toggleOpen() {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        });
    }

    handleSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleOpen}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleOpen}>
                    <ModalHeader toggle={this.toggleOpen}>Submit Comment</ModalHeader>
                    <ModalBody className="ml-2 mr-2">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name" className="form-control" 
                                    validators={{
                                         minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }

}

export default CommentForm;