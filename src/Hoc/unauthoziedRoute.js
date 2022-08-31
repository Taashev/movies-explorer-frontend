import { useContext } from "react"
import { Redirect } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function UnauthoziedRoute({component: Component, ...props}) {
  const {loggedIn} = useContext(AppContext);

  return (
    loggedIn
      ? <Redirect to="/movies" />
      : <Component {...props} />
  );
};

export default UnauthoziedRoute;
