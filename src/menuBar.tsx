import React from 'react';

// Import styles
import './styles/MenuBar.css';
type MenuBarProps = {
    activeTab: string;
    allTabs: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MenuBar: React.FC<MenuBarProps> = ({ activeTab, allTabs, callback }) => (
    <div className='MenuBar'>
        {allTabs.map((tab) => (
            <button
                className={tab === 'Help' ? 'MenuButton HelpButton' : 'MenuButton'}
                disabled={tab === activeTab ? true : false}
                onClick={callback}
                value={tab}
                key={tab}
            >
                <span>{tab}</span>
            </button>
        ))}
    </div>
);

export default MenuBar;
