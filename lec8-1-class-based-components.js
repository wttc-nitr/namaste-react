import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // JS calling parent class, important , more at overreacted.io/why-do-we-write-super-props/

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
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
