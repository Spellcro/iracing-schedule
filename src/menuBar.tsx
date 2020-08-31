import React from 'react';
import { Nav } from 'react-bootstrap';

// Import styles
import './styles/MenuBar.css';
type MenuBarProps = {
    activeTab: string;
    allTabs: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MenuBar: React.FC<MenuBarProps> = ({ activeTab, allTabs, callback }) => {
    return (
        <div className='MenuBarContainer'>
            <Nav className='MenuBar'>
                {allTabs.map((tab) => (
                    <Nav.Item
                        as='button'
                        className={'MenuButton'}
                        onClick={callback}
                        value={tab}
                        key={tab}
                        disabled={tab === activeTab ? true : false}
                    >
                        {tab}
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );

    // This is the old menu bar code.
    // return (
    //     <div className='MenuBar'>
    //         {allTabs.map((tab) => (
    //             <button
    //                 className='MenuButton'}
    //                 disabled={tab === activeTab ? true : false}
    //                 onClick={callback}
    //                 value={tab}
    //                 key={tab}
    //             >
    //                 <span>{tab}</span>
    //             </button>
    //         ))}
    //     </div>
    // );
};

export default MenuBar;
