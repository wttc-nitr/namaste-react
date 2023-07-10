import { useState, useEffect } from "react";

const User = (props) => {
  // const border = {
  //   border: "1px solid black",
  // };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('hi from useEffect');
    }, 1000);

    // cleaning the mess:
    // this is called just before unmounting
    return () => {
      clearInterval(timer);
      console.log('unmounted & interval cleared');
    }
  }, [])

  return (
    <div style={{ border: "3px solid blue" }}>
      <h2>Counter: {counter}</h2>
      <h3>{props.name}</h3>
      <h3>{props.location}</h3>
    </div>
  );
};

export default User;
