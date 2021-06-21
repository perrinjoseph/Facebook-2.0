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

function App() {
  const auth = useIsAuthorized();
  return (
    <div className="App">
      {auth ? <Nav /> : ""}
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute auth={auth} path="/home">
            <SideBar />
            <Home />
            <NewsBar />
          </ProtectedRoute>
          <ProtectedRoute auth={auth} path="/profile">
            <Profile />
          </ProtectedRoute>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
