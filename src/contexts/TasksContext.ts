import { createContext, Dispatch, SetStateAction } from "react";
import { ITask, IGroupByWithNone } from "../interfaces/interfaces";

interface IContextType {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  searchValue: string;
  groupBy: IGroupByWithNone;
}

const initialContext: IContextType = {
  tasks: [],
  setTasks: (): void => {
    throw new Error("setTasks function must be overridden");
  },
  searchValue: "",
  groupBy: "None",
};

export const TasksContext = createContext<IContextType>(initialContext);
