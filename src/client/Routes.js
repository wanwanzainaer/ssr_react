import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  { path: "/", ...HomePage, exact: true },
  {
    path: "/users",
    ...UsersListPage
  }
];

// () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

//https://react-ssr-api.herokuapp.com/
