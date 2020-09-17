import { format } from "date-fns";
import { ITask, ICreateData } from "../interfaces/interfaces.d";

const descendingComparator = (
  a: ITask,
  b: ITask,
  orderBy: keyof ITask
): -1 | 1 | 0 => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order: string, orderBy: keyof ITask) => {
  return order === "desc"
    ? (a: ITask, b: ITask) => descendingComparator(a, b, orderBy)
    : (a: ITask, b: ITask) =>
        -descendingComparator(a, b, orderBy) as 1 | -1 | 0;
};

interface IComparator {
  (a: ITask, b: ITask): 1 | -1 | 0;
}

export const stableSort = (array: Array<ITask>, comparator: IComparator) => {
  const stabilizedThis: [ITask, number][] = array.map((el, index) => [
    el,
    index,
  ]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const createData: ICreateData = (
  id,
  summary,
  description,
  createdOn,
  dueBy,
  priority,
  currentState
) => {
  return { id, summary, description, createdOn, dueBy, priority, currentState };
};

export const searchByValue = (searchValue: string, tasks: ITask[]) => {
  let filteredData = [];
  filteredData = tasks.filter((task) => {
    const { summary, description, createdOn, dueBy, priority } = task;
    const rowValues = Object.values({
      summary,
      description,
      createdOn,
      dueBy,
      priority,
    });
    return rowValues.some((value) => {
      const regex = new RegExp(searchValue, "gi");
      if (typeof value === "string") {
        const matches = value.match(regex);
        if (matches && matches.length) {
          return true;
        }
      } else if (typeof value === "object") {
        const matches = format(value, "yyyy-MM-dd").match(regex);
        if (matches && matches.length) {
          return true;
        }
      }
      return false;
    });
  });
  return filteredData;
};

interface IGroupByField {
  [key: string]: ITask[];
}

export const groupByField = (
  fieldName: keyof ITask,
  tasks: ITask[]
): IGroupByField =>
  tasks.reduce((result: IGroupByField, task) => {
    return {
      ...result,
      [task[fieldName] as string]: [
        ...(result[task[fieldName] as string] || []),
        task,
      ],
    };
  }, {});
