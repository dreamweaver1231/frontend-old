/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { makeSelectAppPage } from 'containers/App/selectors';
import { toggleSidebar } from 'containers/App/actions';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    onToggleSidebar: React.PropTypes.func,
    sidebarState: React.PropTypes.bool,
  };

  render() {
    return (
      <div>
        <Header
          title="Finance Forecast"
          onToggleSidebar={this.props.onToggleSidebar}
        />
        <Sidebar
          open={this.props.sidebarState}
          onToggleSidebar={this.props.onToggleSidebar}
        >
          <Header
            title="Sidebar"
            onToggleSidebar={this.props.onToggleSidebar}
          />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Sidebar>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sidebarState: makeSelectAppPage(),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
