import React from "react";

class GroceryList extends React.Component {
    state = {
        isPurchased: this.props.item.isPurchased,
    };
    togglePurchased = () => {
        this.setState({ isPurchased: !this.state.isPurchased })
        console.log(this.state.isPurchased)
    }
    render() {
        return !this.state.isPurchased? (
            <li>
                Item: {this.props.item.item} <br/>
                 Brand: {this.props.item.brand} <br/>
                Units: {this.props.item.units} <br/>
                Quantity: {this.props.item.quantity}<br/>
                <button onClick={this.togglePurchased}>Remove</button>
            </li>
        ) : null;
    }
}

export default GroceryList;