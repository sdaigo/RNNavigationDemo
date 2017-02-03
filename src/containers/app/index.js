import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from '../../components/PageOne';
import PageTwo from '../../components/PageTwo';

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="page one" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="page two" />
        </Scene>
      </Router>
    );
  }
}

export default AppContainer;
