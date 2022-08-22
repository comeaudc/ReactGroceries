import GroceryList from "./components/List";
import items from "./data";
import React from "react";

console.table(items);
class App extends React.Component {
  state = {
    items: items,
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();

    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: false,
    };
    this.setState({
      items: [newItem, ...this.state.items],
      item: "",
      brand: "",
      units: "",
      quantity: 0,
    });
  };
  render() {
    return (
      <>
        <h1>Grocery List:</h1>
        <div class="container">
          <form onSubmit={this.handleSubmit}>
            <h3>Add Item?</h3>
            <label htmlFor="item">Item: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Item"
              id="item"
            />
            <br />
            <label htmlFor="brand">Brand: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Brand Name"
              id="brand"
            />
            <br />
            <label htmlFor="units">Units: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="0"
              id="units"
            />
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Quantity"
              id="quantity"
            />
            <br />
            <input type="submit" value='Add Item'/>
          </form>
          <div class="list">
            <p>To Get:</p>
            <ul>
              {this.state.items.map((item) =>
                !item.isPurchased ? <GroceryList item={item} /> : null
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
