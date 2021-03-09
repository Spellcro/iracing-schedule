type MenuBarProps = {
    activeTab: string;
    allTabs: string[];
    changeTab: (e: React.ChangeEvent<{}>, newValue: string) => void;
};

export default MenuBarProps;
