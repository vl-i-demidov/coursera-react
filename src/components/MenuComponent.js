import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//one way to define functional component
function RenderMenuItem({ dish, onClick }){
    return (
        <Card onClick={() => { onClick(dish.id) }}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//another way to define functional component
const Menu = (props) => {
    //nb: in react every list item must have a key attribute
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    })

    console.log("Menu component render is invoked");

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
};

export default Menu;