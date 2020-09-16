import  { createContext, Dispatch, SetStateAction } from "react";
import {ITask} from "../interfaces/interfaces";

interface ContextType  {
    tasks: ITask[];
    setTasks: Dispatch<SetStateAction<{ id: any; summary: any; description: any; createdOn: any; dueBy: any; priority: any; currentState: any; }[]>>;
    searchValue: string;
    groupBy: string;
  };

const initialContext:ContextType={tasks:[], setTasks:():void => {
    throw new Error('setTasks function must be overridden');
}, searchValue: "", groupBy:"None"}

export const TasksContext = createContext<ContextType>(initialContext);
