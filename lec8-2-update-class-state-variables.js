import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { counter } = this.state;

    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Counter class: {counter}</h2>

        <button
          onClick={() => {
            // updating state variable
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increase-counter
        </button>

        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
