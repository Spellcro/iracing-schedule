import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
//Import Types
import MenuBarProps from '../../Types/MenuBar.types';
// Import styles
import '../../styles/MenuBar.css';

const MenuBar: React.FC<MenuBarProps> = ({ activeTab, allTabs, callback }) => {
    return (
        <div>
            <AppBar position='fixed' color='default'>
                <Tabs value={activeTab} onChange={callback} aria-label='simple menu bar'>
                    {allTabs.map((tab) => (
                        <Tab value={tab} label={tab} key={tab} className='menu-tab' />
                    ))}
                </Tabs>
            </AppBar>
        </div>
    );
};

export default MenuBar;
