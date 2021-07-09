import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import NewsBar from "./Components/NewsBar/NewsBar";
import Home from "./Components/Pages/Home/Home";
import SideBar from "./Components/SideBar/SideBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Components/Pages/Profile/Profile";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import { useSelector } from "react-redux";
import useIsAuthorized from "./hooks/useIsAuthorized";
import ProtectedRoute from "./Components/Routes/ProtectedRoute/ProtectedRoute";
import ForgotPassword from "./Components/Pages/ForgotPassword/ForgotPassword";
import { useState } from "react";
import Overlay from "./Components/Reusable/Overlay/Overlay";
import ModalPopup from "./Components/Reusable/ModalPopup/ModalPopup";
import session from "./Images/session.svg";
import ResetPassword from "./Components/Pages/ResetPassword/resetPassword";
function App() {
  const auth = useIsAuthorized();
  const [popup, setPopup] = useState(false);
  const reduxState = useSelector((state) => state);
  return (
    <div className="App">
      {reduxState.showOverlay ? <Overlay /> : ""}
      {auth ? <Nav /> : ""}

      {reduxState.showModal === true ? (
        <ModalPopup img={session} text={"Session expired"} />
      ) : (
        ""
      )}
      <Layout>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <ProtectedRoute path="/home">
            <SideBar />
            <Home />
            <NewsBar />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
