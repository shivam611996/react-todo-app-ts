import React from "react";

import TableBody from "@material-ui/core/TableBody";

import TodoTableRow from "../TodoTableRow/TodoTableRow";
import NoRecordFound from "../NoRecordFound/NoRecordFound";
import { ITask, ITaskAction } from "../../../../interfaces/interfaces";

interface IProps {
  filteredTasks: ITask[];
  handleStateChange: (task: ITask) => void;
  handleDialogOpen: (action: ITaskAction, task: ITask) => void;
}

const FilteredRows = ({
  filteredTasks,
  handleStateChange,
  handleDialogOpen,
}: IProps) => {
  return (
    <TableBody>
      {filteredTasks.length ? (
        filteredTasks.map((task) => {
          return (
            <TodoTableRow
              key={task.id}
              task={task}
              handleStateChange={handleStateChange}
              handleDialogOpen={handleDialogOpen}
            />
          );
        })
      ) : (
        <NoRecordFound />
      )}
    </TableBody>
  );
};

export default FilteredRows;
