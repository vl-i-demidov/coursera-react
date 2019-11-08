import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";


function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    if (comments != null) {

        const view = comments.map(c => {
            return (
                <li key={c.id}>
                    <p>{c.comment}</p>
                    <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(c.date))}</p>
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



const DishDetail = ({dish}) => {
    console.log("DishDetail component render is invoked");

    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
};

export default DishDetail;