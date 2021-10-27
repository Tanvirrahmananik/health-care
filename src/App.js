
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Appoinment from './Component/Appoinment/Appoinment';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import Services from './Component/Services/Services';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import Login from './Component/Login/Login'
function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
       
        <Route exact path='/AboutUs'>
        <AboutUs></AboutUs>
        </Route>
        <PrivateRoute exact path='/Appoinment'>
        <Appoinment></Appoinment>
        </PrivateRoute>
        <Route exact path='/Contact'>
          <Contact></Contact>
          </Route>
        <PrivateRoute exact path='/Services'>
        <Services></Services>
        </PrivateRoute>
        <PrivateRoute exact path='/ServiceDetail/:Id'>
        <ServiceDetail></ServiceDetail>
        </PrivateRoute>
        <Route exact path='/Blog'>
        <Blog></Blog>
        </Route>
        <Route exact path='/Login'>
          <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      
      
      

    
     
    </div>
  );
}

export default App;
