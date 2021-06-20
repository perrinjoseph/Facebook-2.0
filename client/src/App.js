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

function App() {
  const data = useSelector((data) => data.user);
  const loggedIn = Object.values(data).length > 0;
  return (
    <div className="App">
      {!loggedIn ? <Nav /> : ""}
      <Layout>
        <Switch>
          <Route exact path="/">
            <SideBar />
            <Home />
            <NewsBar />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Redirect to={loggedIn ? "/" : "login"} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
