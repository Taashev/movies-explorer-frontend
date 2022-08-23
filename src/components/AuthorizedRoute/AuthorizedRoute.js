import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { LoggedInContext } from "../../Contexts/LoggedInContext";

function AuthorizedRoute({component: Component, ...props}) {
  const loggedIn = useContext(LoggedInContext);

  return loggedIn
    ? <Component {...props} />
    : <Redirect to="/" />
};

export default AuthorizedRoute;
