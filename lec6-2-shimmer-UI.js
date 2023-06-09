// shimmer UI is skeleton of post-rendered components. It's like pre-rendered UI.
// as soon as the page loads, we want the user to see the skeleton of the UI instead of waiting for results to be loaded
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
      <div className="shimmer-card">Card</div>
    </div>
  );
};

export default Shimmer;
