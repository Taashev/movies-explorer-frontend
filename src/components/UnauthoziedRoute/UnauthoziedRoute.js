import { useContext } from "react"
import { Redirect } from "react-router-dom";
import { LoggedInContext } from "../../Contexts/LoggedInContext"

function UnauthoziedRoute({component: Component, ...props}) {
  const loggedIn = useContext(LoggedInContext);

  return (
    loggedIn
      ? <Redirect to="/movies" />
      : <Component {...props} />
  );
};

export default UnauthoziedRoute;
