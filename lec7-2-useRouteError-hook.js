import { useRouteError } from "react-router-dom";

// for accessing the error object, produced by useRouteError hook

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>Oops...!!</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
