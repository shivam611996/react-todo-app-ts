import React from "react";

import TableBody from "@material-ui/core/TableBody";

import TodoTableRow from "../TodoTableRow/TodoTableRow";
import NoRecordFound from "../NoRecordFound/NoRecordFound";

const FilteredRows = ({
  filteredTasks,
  handleStateChange,
  handleDialogOpen
}) => {
  return (
    <TableBody>
      {filteredTasks.length ? (
        filteredTasks.map(task => {
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

// FilteredRows.propTypes = {
//   filteredTasks: PropTypes.array,
//   handleStateChange: PropTypes.func,
//   handleDialogOpen: PropTypes.func,
// };

export default FilteredRows;
