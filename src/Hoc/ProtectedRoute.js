import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function ProtectedRoute({component: Component, ...props}) {
  const {loggedIn} = useContext(AppContext);

  return loggedIn
    ? <Component {...props} />
    : <Redirect to="/" />
};

export default ProtectedRoute;
