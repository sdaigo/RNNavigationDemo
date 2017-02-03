// @flow
import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import {
  Reducer,
  Router,
  Scene,
  Switch,
  Modal,
  Actions,
  ActionsConst
} from 'react-native-router-flux';

import Launch from '../../components/Launch';
import Login from '../../components/Login';
import ResetPassword from '../../components/ResetPassword';
import PageOne from '../../components/PageOne';
import PageTwo from '../../components/PageTwo';

import CLOSE_BUTTON from '../../images/close.png';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleClickCloseButton() {
    alert('on left');
    Actions.dismiss();
  }

  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="modal" component={Modal}>
          <Scene key="root">
            <Scene key="launch" component={Launch} title="Launch" initial />
            <Scene key="login" direction="vertical">
              <Scene
                key="loginModal"
                type="modal"
                title="Login"
                onLeft={() => { Actions.pop() }}
                leftButtonStyle={{ width: 32 }}
                leftButtonImage={CLOSE_BUTTON}
                component={Login} />
              <Scene key="resetPassword" title="Reset Password" component={ResetPassword} />
            </Scene>
            <Scene key="pageOne" component={PageOne} title="page one" />
            <Scene key="pageTwo" component={PageTwo} title="page two" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default AppContainer;
