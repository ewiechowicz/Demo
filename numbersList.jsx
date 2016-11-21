const NumbersList = React.createClass({
  getInitialState() {
    return {
      listItem: '',
      count: 0,
      numbers: [],
    };
  },
  onListChange(event) {
    this.setState({
      listItem: event.target.value,
    });
  },
  onButtonClick() {
    this.setState({
      listItem: '',
      count: this.state.count + 1,
      numbers: this.state.numbers.concat(this.state.listItem),
    });
  },
  onButtonClick2(i) {
    const newNumbers = this.state.numbers.slice();
    newNumbers.splice(i, 1);
    this.setState({
      numbers: newNumbers,
      count: this.state.count - 1,
    });
  },
  add(event) {
    if (event.keyCode === 13) {
      this.onButtonClick();
    }
  },
  render() {
    const xListItems = [];
    for (let i = 0; i < this.state.count; i += 1) {
      xListItems.push(
        <div className="item">
          <p>{this.state.numbers[i]}
          &nbsp;
            <button
              className="white ui icon small button"
              onClick={() => {
                this.onButtonClick2(i);
              }}
            >
              <i className="trash icon" />
            </button>
          </p>
        </div>
      );
    }

    let result = 0;
    for (let j = 0; j < this.state.count; j += 1) {
      result += Number(this.state.numbers[j]);
    }
    return (
      <div className="ui equal width center aligned padded grid">
        <div className="row">
          <div className="blue column">
            <p><b>Numbers List</b></p>
          </div>
        </div>
        <div className="row">
          <div className="white column">
            <div className="ui huge input">
              <input
                type="number"
                placeholder="Add number..."
                value={this.state.listItem}
                onChange={this.onListChange}
                onKeyDown={this.add}
              />
            </div>
          </div>
          <div className="white column" />
          <div className="blue column">
            <button
              className="big ui inverted right labeled icon button"
              onClick={this.onButtonClick}
            >
              <i className="right arrow icon" />
            Add
            </button>
          </div>
        </div>
        <div
          className="blue row"
          style={{
            backgroundColor: 'blue',
          }}
        >
          <div className="ui relaxed horizontal list">
            {xListItems}
          </div>
        </div>
        <div className="row">
          <div className="white column" />
        </div>
        <div className="row">
          <div className="grey column">
            <p><b>Sum:&nbsp;{result}</b></p>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <NumbersList />,
  document.getElementById('app')
);
