// import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Inventory from "./Component/Inventory/Inventory";
import NotFound from "./Component/NotFound/NotFound";
import Shop from "./Component/Shop/Shop";
import OrderReview from "./Component/OrderReview/OrderReview";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
