/**
*
* Sidebar
*
*/

import React from 'react';
import { Drawer } from 'material-ui';

const { bool, func, node } = React.PropTypes;

const Sidebar = ({ open, onToggleSidebar, children }) => (
  <Drawer
    docked={false}
    open={open}
    onRequestChange={onToggleSidebar}
  >
    {children}
  </Drawer>
);

Sidebar.propTypes = {
  open: bool,
  onToggleSidebar: func,
  children: node,
};

export default Sidebar;
