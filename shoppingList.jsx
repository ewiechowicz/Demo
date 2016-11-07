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
    newItems.push({
      name: this.state.item,
      done: false,
      bold: false,
    });
    this.setState({
      items: newItems,
      item: '',
    });
  },
  buttonOnClick2(e) {
    // this.state.items.splice(e, 1);
    const item = this.state.items[e];
    const newItems = this.state.items.slice();

    if (item.bold === true && item.done === true) {
      newItems[e] = {
        name: item.name,
        done: false,
        bold: true,
      };
    } else if (item.bold === true && item.done === false) {
      newItems[e] = {
        name: item.name,
        done: true,
        bold: true,
      };
    } else if (item.bold === false && item.done === true) {
      newItems[e] = {
        name: item.name,
        done: false,
        bold: false,
      };
    } else if (item.bold === false && item.done === false) {
      newItems[e] = {
        name: item.name,
        done: true,
        bold: false,
      };
    }
    this.setState({
      items: newItems,
    });
  },
  buttonOnClick3() {
    const newItems = this.state.items.slice();
    newItems.push({
      name: this.state.item,
      bold: true,
      done: false,
    });
    this.setState({
      items: newItems,
      item: '',
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
      const item = this.state.items[i];
      let name = item.name;
      if (item.bold === true && item.done === true) {
        name = <s><b>{item.name}</b></s>;
      } else if (item.bold === true && item.done === false) {
        name = <b>{item.name}</b>;
      } else if (item.bold === false && item.done === true) {
        name = <s>{item.name}</s>;
      } else if (item.bold === false && item.done === false) {
        name = item.name;
      }
      ar.push(<li key={i}>
        {name}&nbsp;
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
        <button onClick={this.buttonOnClick3}>
          Add priority
        </button>
        <ul>
          {ar}
        </ul>
      </div>
    );
  },
});

ReactDOM.render(<ShoppingList />, document.getElementById('example'));
