import { useContext } from "react";
import UserContext from "./lec11-5-0-create-a-Context";

const data = useContext(UserContext);

data.loggedInUser = "another user";

console.log(data);

// {loggedInUser: "another user"}