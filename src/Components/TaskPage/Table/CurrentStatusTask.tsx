import { CurrentStatus, ListElement } from "./styled";

interface CurrentStatusTaskProps {
  setCurrentStatus: (value: string) => void;
  currentTask: string[];
}

export const CurrentStatusTask: React.FC<CurrentStatusTaskProps> = ({
  setCurrentStatus,
  currentTask,
}) => {
  return (
    <CurrentStatus>
      {currentTask.map((item, idx) => (
        <ListElement
          key={item}
          onClick={() => setCurrentStatus(currentTask[idx])}
        >
          {currentTask[idx]}
        </ListElement>
      ))}
    </CurrentStatus>
  );
};
