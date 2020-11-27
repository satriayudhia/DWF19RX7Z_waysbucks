import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Context} from './config/Context'
import LandingGuest from './pages/LandingGuest'
import LandingLogin from './pages/LandingLogin'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import MyProfile from './pages/MyProfile'
import AddProduct from './pages/AddProduct'
import AddToping from './pages/AddToping'

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingGuest} />
          <Route exact path="/home" component={LandingLogin} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/profile" component={MyProfile} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/add-toping" component={AddToping} />
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
