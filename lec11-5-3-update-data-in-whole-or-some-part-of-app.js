import UserContext from "./lec11-5-0-create-a-Context";

const AppLayout = () => {
    
  return (
    // now data is updated in Header component only.
    <div>
      <UserContext.Provider value={{loggedInUser: "another User"}}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>


    /**
     now data is updated in whole app (that is Header + Outlet) 
     
    <UserContext.Provider value={{loggedInUser: "another User"}}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>

     */

    
    /**
    now Header will update with "another User" & rest of the app will update with "user1" 
     
    <UserContext.Provider value={{loggedInUser: "user1"}}>
    
      <div>

        <UserContext.Provider value={{loggedInUser: "another User"}}>
          <Header />
        </UserContext.Provider>

        <Outlet />
      </div>
     
    </UserContext.Provider>

     */
    
  );
};

export default AppLayout;