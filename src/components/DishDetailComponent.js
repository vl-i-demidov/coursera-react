import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null) {

            const view = comments.map(c => {
                return (
                    <li>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {c.date}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {view}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;