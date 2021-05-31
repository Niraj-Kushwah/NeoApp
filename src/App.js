import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import About from './components/about/About';
import Signup from './components/signup/Signup';
import { BrowserRouter,HashRouter,MemoryRouter,Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Switch>            
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
          </Switch>  
        <Footer/>   
      </BrowserRouter>  
    </div>
  );
}

export default App;