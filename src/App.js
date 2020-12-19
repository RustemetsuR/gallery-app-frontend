import { Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import RedirectToHome from './components/RedirectToHome/RedirectToHome';
import AddImage from './containers/Gallery/AddImage/AddImage';
import AuthorsGallery from './containers/Gallery/AuthorsGallery/AuthorsGallery';
import Home from './containers/Gallery/Home/Home';
import Login from './containers/Users/Login/Login';
import Register from './containers/Users/Register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Container>
            <Route exact path='/' component={RedirectToHome} />
            <Route exact path='/gallery' component={Home} />
            <Route path='/gallery/:id' component={AuthorsGallery} />
            <Route path='/addImage/' component={AddImage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route />
          </Container>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
