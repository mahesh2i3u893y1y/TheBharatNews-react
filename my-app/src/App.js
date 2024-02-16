
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound  from "./Components/NotFound";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Allnews from "./Components/Allnews";
import UserDetails from "./Components/UserDetails";


import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  Component={Home}/>
        <Route exact path="/aboutus" Component={AboutUs}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/allnews" Component={Allnews}/>
        <Route exact path="/userprofile" Component={UserDetails}/>
        <Route Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
