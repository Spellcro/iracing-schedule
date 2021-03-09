type WeekSelectorProps = {
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  seasonLength: number;
  currentWeek: number;
};

export default WeekSelectorProps;
