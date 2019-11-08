import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };

        console.log("Menu component constructor is invoked");
    }

    componentDidMount() {
        console.log("Menu component componentDidMount is invoked");
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }  

    render() {

        //nb: in react every list item must have a key attribute
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => { this.props.onClick(dish.id) }}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
    }
}

export default Menu;