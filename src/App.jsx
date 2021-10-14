
import './App.css';
import {
  Switch,
  Route
 } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';


export const UserContext = createContext()
function App() {
  const[loggedInUser,setLoggedInUser] = useState({})
  return (
<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
<Header/>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/home" component={Home}/>
  <Route exact path="/login" component={Login}/>
  {/* <PrivateRoute path="/destination" component={Destination}/> */}
  <PrivateRoute path="/destination/:name" component={Destination}/>
</Switch>
  
</UserContext.Provider>
  );
}

export default App;
