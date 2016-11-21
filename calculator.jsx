const Calculator = React.createClass({
  getInitialState() {
    return {
      operator: '+',
      number: '',
      number2: '',
    };
  },

  onSelectChange(event) {
    this.setState({
      operator: event.target.value,
    });
  },
  onFirstNumberChange(event) {
    this.setState({
      number: Number(event.target.value),
    });
  },
  onSecondNumberChange(event) {
    this.setState({
      number2: Number(event.target.value),
    });
  },

  // componentDidMount() {
  //   $(this.refs.dropdown).dropdown({
  //     action: this.onSelectChange,
  //   });
  // },

  render() {
    let result;
    switch (this.state.operator) {
      case '+':
        result = this.state.number + this.state.number2;
        break;

      case '-':
        result = this.state.number - this.state.number2;
        break;

      case '*':
        result = this.state.number * this.state.number2;
        break;

      case '/':
        result = this.state.number / this.state.number2;
        break;

      default:
    }

    // let xResult;
    // if (result || result === 0) {
    //   xResult = <b>= {result}</b>;
    // }

    return (
      <div
        className="ui one column centered grid"
        style={{
          marginTop: 100,
        }}
      >
        <div className="row">
          <div className="column aligned">
            <div className="ui action input">
              <input
                type="number"
                placeholder="Add number..."
                onChange={this.onFirstNumberChange}
                value={this.state.number}
              />
              &nbsp;
              <select
                className="ui massive compact selection dropdown"
                value={this.state.operator}
                onChange={this.onSelectChange}
              >
                <option value="+">Dodawanie</option>
                <option value="-">Odejmowanie</option>
                <option value="*">Mnożenie</option>
                <option value="/">Dzielenie</option>
              </select>
              &nbsp;
              <input
                type="number"
                placeholder="Add number..."
                onChange={this.onSecondNumberChange}
                value={this.state.number2}
              />
              <button className="ui blue button">{result}</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="column aligned">
            <img
              alt="calculator"
              src="./calculator.png"
              heigh="20%"
              width="20%"
              marginTop="200"
            />
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Calculator />,
  document.getElementById('app')
);
