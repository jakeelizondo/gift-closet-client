import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../../routes/Homepage/Homepage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import PublicRoute from '../utilities/PublicRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import GiftListPage from '../../routes/GiftListPage/GiftListPage';
import GiftDetailPage from '../../routes/GiftDetailPage/GiftDetailPage';
import AppContext from '../../contexts/AppContext';
import PrivateRoute from '../utilities/PrivateRoute';
import AddGiftPage from '../../routes/AddGiftPage/AddGiftPage';
import EditGiftPage from '../../routes/EditGiftPage/EditGiftPage';
import TagListPage from '../../routes/TagListPage/TagListPage';
import AddTagPage from '../../routes/AddTagPage/AddTagPage';

class App extends React.Component {
  state = {
    hasError: false,
    tags: [],
    gifts: [],
    userLoggedIn: false,
  };

  setGifts = (gifts) => {
    this.setState({ gifts });
  };

  setTags = (tags) => {
    this.setState({ tags });
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <AppContext.Provider
          value={{
            gifts: this.state.gifts,
            tags: this.state.tags,
            setGifts: this.setGifts,
            setTags: this.setTags,
            userLoggedIn: this.state.userLoggedIn,
          }}
        >
          <main className="App">
            {this.state.hasError && (
              <p> Oops, looks like there was an error!</p>
            )}
            <Switch>
              <Route exact path={'/'} component={Homepage} />
              <PublicRoute path={'/login'} component={LoginPage} />
              <PublicRoute path={'/register'} component={RegisterPage} />
              <PrivateRoute path={'/add-gift'} component={AddGiftPage} />
              <PrivateRoute path={'/add-tag'} component={AddTagPage} />
              <PrivateRoute exact path={'/my-gifts'} component={GiftListPage} />
              <PrivateRoute
                path={'/edit-gift/:giftId'}
                component={EditGiftPage}
              />
              <PrivateRoute
                exact
                path={'/manage-tags'}
                component={TagListPage}
              />
              <PrivateRoute
                exact
                path={'/my-gifts/:giftId'}
                component={GiftDetailPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </AppContext.Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
