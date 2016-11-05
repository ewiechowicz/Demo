const ShoppingList = React.createClass({
  getInitialState() {
    return {
      item: '',
      items: [],
    };
  },
  itemOnChange(e) {
    this.setState({
      item: e.target.value,
    });
  },
  buttonOnClick() {
    const newItems = this.state.items.slice();
    newItems.push(this.state.item);
    this.setState({
      items: newItems,
      item: '',
    });
  },
  buttonOnClick2(e) {
    // this.state.items.splice(e, 1);
    const newItems2 = this.state.items.slice();
    newItems2[e] = <s>{newItems2[e]}</s>;
    this.setState({
      items: newItems2,
    });
  },
  enterOnClick(e) {
    if (e.keyCode === 13) {
      this.buttonOnClick();
    }
  },
  render() {
    const ar = [];
    for (let i = 0; i < this.state.items.length; i += 1) {
      ar.push(<li key={i}>{this.state.items[i]}&nbsp;
        <button
          onClick={() => {
            this.buttonOnClick2(i);
          }}
        />
      </li>);
    }
    return (
      <div>
        <b>Shopping List</b>
        <br />
        <input
          type="text"
          value={this.state.item}
          onChange={this.itemOnChange}
          onKeyDown={this.enterOnClick}
        />
        <button onClick={this.buttonOnClick}>
        Add
        </button>
        <ul>
          {ar}
        </ul>
      </div>
    );
  },
});

ReactDOM.render(<ShoppingList />, document.getElementById('example'));
