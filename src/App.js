import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import NavbarSection from './Shared/Navbar/NavbarSection'
import AuthProvider from './Context/AuthProvider';
import SignUp from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";

function App() {
  return (
    <div className='Noto'>
      <Router>
        <AuthProvider>
          <NavbarSection></NavbarSection>
          <Switch>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/signin'>
              <Signin></Signin>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
