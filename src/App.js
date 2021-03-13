import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    // state에는 바꾸고 싶은 데이터가 들어감
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // this.setState({ count: this.state.count + -1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
