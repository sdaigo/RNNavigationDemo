import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import SideMenuContent from './SideMenuContent';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

class SideMenu extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        open={state.open}
        content={<SideMenuContent />}
        openDrawerOffset={0.333}
        panCloseMask={0.2}
        styles={drawerStyles}
        tweenEasing="easeInQuint"
        type="overlay" // 上にかぶさるように表示する
      >
        <DefaultRenderer
          navigationState={children[0]}
          onNavigate={this.props.onNavigate}
        />
      </Drawer>
    );
  }
}

const drawerStyles = {
};

export default SideMenu;
