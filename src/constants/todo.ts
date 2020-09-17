import { addDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";

import { createData } from "../utils/todo";

interface IHeadCells {
  id:
    | "summary"
    | "description"
    | "createdOn"
    | "dueBy"
    | "priority"
    | "actions";
  label: string;
}

export const headCells: IHeadCells[] = [
  {
    id: "summary",
    label: "Summary",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "createdOn",
    label: "Created On",
  },
  { id: "dueBy", label: "Due By" },
  { id: "priority", label: "Priority" },
  { id: "actions", label: "Actions" },
];

export const rows = [
  createData(
    uuidv4(),
    "Eat afternoon food",
    "description of eating food",
    new Date(),
    addDays(new Date(), 1),
    "Medium",
    "Pending"
  ),
  createData(
    uuidv4(),
    "Go outside and play football",
    "description of playing football",
    addDays(new Date(), -2),
    addDays(new Date(), 3),
    "None",
    "Pending"
  ),
  createData(
    uuidv4(),
    "Go to market and buy something",
    "description of going to market",
    addDays(new Date(), -2),
    addDays(new Date(), 10),
    "Low",
    "Pending"
  ),
  createData(
    uuidv4(),
    "Preapre office presentation",
    "description of preparing presentation",
    addDays(new Date(), -1),
    addDays(new Date(), 1),
    "High",
    "Completed"
  ),
  createData(
    uuidv4(),
    "Study unknown stuff",
    "description of studying",
    addDays(new Date(), -1),
    addDays(new Date(), 1),
    "Medium",
    "Completed"
  ),
  createData(
    uuidv4(),
    "Do excercise in the morning",
    "description of excercise",
    addDays(new Date(), -4),
    addDays(new Date(), 1),
    "High",
    "Completed"
  ),
];
