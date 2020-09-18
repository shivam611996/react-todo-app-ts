export interface ITask {
  id: string;
  summary: string;
  description: string;
  createdOn: Date;
  dueBy: Date;
  priority: string;
  currentState: string;
}

export type ITaskAction = "edit" | "create" | "delete" | "read-only";

export interface ICreateData {
  (
    id: string,
    summary: string,
    description: string,
    createdOn: Date,
    dueBy: Date,
    priority: string,
    currentState: string
  ): ITask;
}

export type ITab = "All" | "Pending" | "Completed";

export type IOrder = "asc" | "desc";

export type IOrderBy =
  | "summary"
  | "description"
  | "createdOn"
  | "dueBy"
  | "priority";

export type IGroupBy = "createdOn" | "dueBy" | "priority";

export type IGroupByWithNone = IGroupBy | "None";
