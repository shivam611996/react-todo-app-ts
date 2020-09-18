import React from "react";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import TodoTableHead from "./TodoTableHead/TodoTableHead";
import TaskDetailsDialog from "../TaskDetailsDialog/TaskDetailsDialog";
import TaskRemoveDialog from "../TaskRemoveDialog/TaskRemoveDialog";
import {
  stableSort,
  getComparator,
  searchByValue,
  groupByField,
} from "../../../utils/todo";
import { TasksContext } from "../../../contexts/TasksContext";
import GroupedRows from "./GroupedRows/GroupedRows";
import FilteredRows from "./FilteredRows/FilteredRows";
import { ITask, ITaskAction } from "../../../interfaces/interfaces.d";

import "./TodoTable.styles.scss";

interface IProps {
  type: string;
}

const TodoTable = ({ type }: IProps) => {
  const { tasks, setTasks, searchValue, groupBy } = React.useContext(
    TasksContext
  );
  const [order, setOrder] = React.useState<"asc" | "desc">("desc");
  const [orderBy, setOrderBy] = React.useState<keyof ITask>("createdOn");
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState<ITaskAction>("edit");
  const [taskDetails, setTaskDetails] = React.useState<ITask>();
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [groupedTasks, setGroupedTasks] = React.useState({});

  React.useEffect(() => {
    let _filteredTasks = stableSort(tasks, getComparator(order, orderBy));

    if (type !== "All") {
      _filteredTasks = _filteredTasks.filter(
        (task) => task.currentState === type
      );
    }

    if (searchValue) {
      _filteredTasks = searchByValue(searchValue, _filteredTasks);
    }

    if (groupBy && groupBy !== "None") {
      const _groupedTasks = groupByField(
        groupBy as keyof ITask,
        _filteredTasks
      );
      setGroupedTasks(_groupedTasks);
    } else {
      setFilteredTasks(_filteredTasks);
    }
  }, [groupBy, order, orderBy, searchValue, tasks, type]);

  const handleRequestSort = (property: keyof ITask) => {
    const isAsc = orderBy === property && order === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder);
    setOrderBy(property);
  };

  const handleStateChange = (task: ITask) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((item) => {
        if (item.id === task.id) {
          const currentState =
            task.currentState === "Completed" ? "Pending" : "Completed";
          return { ...item, currentState };
        }
        return item;
      });
      return newTasks;
    });
  };

  const handleDialogOpen = (_action: ITaskAction, task: ITask) => {
    setTaskDetails({ ...task });
    setAction(_action);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper>
        <TableContainer>
          <Table aria-labelledby="tableTitle" aria-label="enhanced table">
            <TodoTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            {groupBy && groupBy !== "None" ? (
              <GroupedRows
                groupedTasks={groupedTasks}
                handleStateChange={handleStateChange}
                handleDialogOpen={handleDialogOpen}
              />
            ) : (
              <FilteredRows
                filteredTasks={filteredTasks}
                handleStateChange={handleStateChange}
                handleDialogOpen={handleDialogOpen}
              />
            )}
          </Table>
        </TableContainer>
      </Paper>
      {action !== "delete" ? (
        <TaskDetailsDialog
          open={open}
          handleClose={handleDialogClose}
          taskDetails={taskDetails}
          action={action}
        />
      ) : (
        <TaskRemoveDialog
          open={open}
          handleClose={handleDialogClose}
          taskDetails={taskDetails}
        />
      )}
    </>
  );
};

export default TodoTable;
