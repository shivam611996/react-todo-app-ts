import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import TodoTableRow from "../TodoTableRow/TodoTableRow";
import NoRecordFound from "../NoRecordFound/NoRecordFound";
import { ITask, ITaskAction } from "../../../../interfaces/interfaces";

interface IProps {
  groupedTasks: { [key: string]: ITask[] };
  handleStateChange: (task: ITask) => void;
  handleDialogOpen: (action: ITaskAction, task: ITask) => void;
}

const GroupedRows = ({
  groupedTasks,
  handleStateChange,
  handleDialogOpen,
}: IProps): JSX.Element => {
  const groupKeys = Object.keys(groupedTasks);

  return (
    <TableBody>
      {groupKeys.length ? (
        groupKeys.map((taskGroup) => {
          const tasks = groupedTasks[taskGroup];
          return (
            <React.Fragment key={taskGroup}>
              <TableRow className="task-group-name" tabIndex={-1}>
                <TableCell align="center" colSpan={6}>
                  {taskGroup}
                </TableCell>
              </TableRow>
              {tasks.map((task) => (
                <TodoTableRow
                  key={task.id}
                  task={task}
                  handleStateChange={handleStateChange}
                  handleDialogOpen={handleDialogOpen}
                />
              ))}
            </React.Fragment>
          );
        })
      ) : (
        <NoRecordFound />
      )}
    </TableBody>
  );
};

export default GroupedRows;
