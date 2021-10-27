// import logo from './logo.svg';
import './App.css';
import "./css/style.css";
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from "react-router-dom";
import Home  from "./Home";
import Headers from './Header';
import Login from './Login';
import RnO from './RnO';
import Basket from './Basket';
import Prime from './Prime';
import GamingAccessories from './GamingAccessories';
import ProductDetailPage from './productDetail_page';
import   "./StateProvider";
import { StateContextConsumer } from './StateProvider';
import { useState } from 'react';
function App(props) {
  const [count, updateCount] = useState(0)
  function increment() {
    updateCount(count + 1)
  }
  return (
    
    <Router>
      <div>
       <Headers/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch >
          {/* <Route path="/">
            <Redirect to="/home"/>
            <Home />
          </Route> */}
          
        <Route path="/home">
        <Home />  
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/RnO">
            <RnO />
          </Route>
          <Route path="/Basket">
            <Basket />
          </Route>
          <Route path="/Prime">
            <Prime />
          </Route>
          <Route path="/GamingAccessories">
            <GamingAccessories selectedCategory="GamingAccessories" />
          </Route>
          <Route path="/ComputerAccessories">
            <GamingAccessories selectedCategory="ComputerAccessories" />
          </Route>
          <Route path="/HolydayDeals">
            <GamingAccessories  selectedCategory="HolydayDeals"/>
          </Route>
          <Route path="/productDetail">
            <ProductDetailPage  />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
