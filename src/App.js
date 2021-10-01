import "./App.css";
import { Router, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import AccountTemplate from "./templates/AccountTemplate";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import { createBrowserHistory } from "history";
import FilmDetailPage from "./pages/FilmDetailPage";
import Loading from "./components/Loading/Loading";
import BookTicket from "./components/BookTicket/BookTicket";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading></Loading>
      <Switch>
        <HomeTemplate exact={true} path="/home" component={HomePage} />
        <HomeTemplate
          exact={true}
          path="/detail/:id/:name"
          component={FilmDetailPage}
        />
        <HomeTemplate
          exact={true}
          path="/detail/:id"
          component={FilmDetailPage}
        />
        <HomeTemplate
          exact={true}
          path="/book-ticket/:id"
          component={BookTicket}
        />
        <HomeTemplate exact={true} path="/" component={HomePage} />
        <AccountTemplate exact={true} path="/login" component={LoginForm} />
        <AccountTemplate
          exact={true}
          path="/register"
          component={RegisterForm}
        />
        <HomeTemplate exact={false} path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
