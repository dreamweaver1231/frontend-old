/**
*
* Header
*
*/

import React from 'react';
import { AppBar } from 'material-ui';

const { string, func } = React.PropTypes;

const Header = ({ title, onToggleSidebar }) => (
  <AppBar
    title={title}
    onLeftIconButtonTouchTap={onToggleSidebar}
  />
);

Header.propTypes = {
  title: string,
  onToggleSidebar: func,
};

export default Header;
