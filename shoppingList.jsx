/* eslint-disable jsx-a11y/label-has-for */

const ShoppingList = React.createClass({
  getInitialState() {
    return {
      item: '',
      items: [],
    };
  },
  componentWillMount() {
    if (JSON.parse(localStorage.getItem('newItems')) !== null) {
      this.setState({
        items: JSON.parse(localStorage.getItem('newItems')),
      });
    }
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
    /* global localStorage:false*/
    localStorage.setItem('newItems', JSON.stringify(newItems));
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
    localStorage.setItem('newItems', JSON.stringify(newItems));
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
    localStorage.setItem('newItems', JSON.stringify(newItems));
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
  buttonOnClick4(e) {
    // const item = this.state.items[e];
    const newItems = this.state.items.slice();
    newItems.splice(e, 1);
    localStorage.setItem('newItems', JSON.stringify(newItems));
    this.setState({
      items: newItems,
    });
  },
  render() {
    const ar = [];
    for (let i = 0; i < this.state.items.length; i += 1) {
      const item = this.state.items[i];
      let name = item.name;
      if (item.bold === true && item.done === true) {
        name = <b>{item.name}</b>;
      } else if (item.bold === true && item.done === false) {
        name = <b>{item.name}</b>;
      } else {
        name = item.name;
      }
      ar.push(<li key={i}>
        {name}&nbsp;
        &nbsp;
        <div className={`ui checkbox ${item.done ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => {
              this.buttonOnClick2(i);
            }}
          />
          <label />
        </div>
        <button
          className="ui icon mini button"
          onClick={() => {
            this.buttonOnClick4(i);
          }}
        >
          <i className="trash icon" />
        </button>
      </li>);
    }
    return (
      <div className="ui middle aligned center aligned grid">
        <div
          className="ten wide column centered grid"
          style={{
            backgroundColor: 'white',
            borderColor: 'grey',
            borderWidth: 1,
            borderStyle: 'inset',
            marginTop: 200,
            maxWidth: 450,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              fontFamily: 'Lato',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Shopping List
          </div>
          <br />
          <input
            className="ui large input"
            type="text"
            placeholder="Milk, flour, eggs, etc..."
            value={this.state.item}
            onChange={this.itemOnChange}
            onKeyDown={this.enterOnClick}
          />
          <br />
          <button
            className="tiny ui secondary button"
            onClick={this.buttonOnClick}
            style={{
              marginTop: 6,
            }}
          >
           Add
          </button>
          <button
            className="tiny ui button"
            onClick={this.buttonOnClick3}
          >
          Add priority
          </button>
          <ul>
            {ar}
          </ul>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<ShoppingList />, document.getElementById('example'));
