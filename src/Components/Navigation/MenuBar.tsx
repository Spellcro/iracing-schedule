import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
//Import Types
import MenuBarProps from '../../Types/MenuBar.types';
// Import styles
import '../../styles/MenuBar.css';

const MenuBar: React.FC<MenuBarProps> = ({ activeTab, allTabs, changeTab }) => {
  return (
    <AppBar position="fixed" color="default">
      <Tabs value={activeTab} onChange={changeTab}>
        {allTabs.map((tab) => (
          <Tab
            value={tab}
            label={tab}
            key={`${tab}-tab`}
            classes={{ root: 'menu-tab' }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default MenuBar;
