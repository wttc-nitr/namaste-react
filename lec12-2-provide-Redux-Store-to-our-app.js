// react-redux library is kind of a bridge b/w the two.

import { Provider } from "react-redux";
import appStore from "./lec12-1-build-a-Redux-Store";

const Xyz = () => {
  return (
    <Provider stor={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
};

export default appStore;

// now, our whole app can use appStore.
// we can also provide appStore the a portion of the app, just like Context.