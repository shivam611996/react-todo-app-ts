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
