type MenuBarProps = {
    activeTab: string;
    allTabs: string[];
    callback: (e: React.ChangeEvent<{}>, newValue: string) => void;
};

export default MenuBarProps;
