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
        <li key={i}>
          {this.state.numbers[i]}
          <button
            onClick={() => {
              this.onButtonClick2(i);
            }}
          >
          Delete
          </button>
        </li>
      );
    }

    let result = 0;
    for (let j = 0; j < this.state.count; j += 1) {
      result += Number(this.state.numbers[j]);
    }
    return (
      <div>
        <b>Numbers List:</b>
        <br />
        <input
          type="text"
          value={this.state.listItem}
          onChange={this.onListChange}
          onKeyDown={this.add}
        />
        <button onClick={this.onButtonClick}>
          Add
        </button>
        <ul>
          {xListItems}
        </ul>
        <b>Sum:</b>
        &nbsp;
        <b>{result}</b>
      </div>
    );
  },
});


ReactDOM.render(
  <NumbersList />,
  document.getElementById('app')
);
