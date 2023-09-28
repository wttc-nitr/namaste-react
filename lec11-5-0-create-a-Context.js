/**
 * - create a Context
 * - access that Context anywhere in the app
 * - mutate (change data of) that Context
 * - update the data in whole app or some portion of the app
 */

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User"
});

export default UserContext;