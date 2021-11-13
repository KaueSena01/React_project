import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

// Run npm install -g npm@8.1.2

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Container customClass="min_height">
        <Route path="/" exact><Home/></Route>
        <Route path="/projects"><Project/></Route>
        <Route path="/newproject"><NewProject/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/company"><Company/></Route>
        </Container>
      </Switch>
      
      <Footer/>
    </Router>
  );
}

export default App;
