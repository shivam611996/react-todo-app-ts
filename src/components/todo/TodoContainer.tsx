import React from "react";

import CreateTask from "./CreateTask/CreateTask";
import GroupTasks from "./GroupTasks/GroupTasks";
import SearchTasks from "./SearchTasks/SearchTasks";
import TaskTabs from "./TaskTabs/TaskTabs";
import { rows } from "../../constants/todo";
import { TasksContext } from "../../contexts/TasksContext";
import { IGroupByWithNone } from "../../interfaces/interfaces";

import "./TodoContainer.styles.scss";

const TodoContainer = () => {
  const [tasks, setTasks] = React.useState(rows);
  const [searchValue, setSearchValue] = React.useState("");
  const [groupBy, setGroupBy] = React.useState<IGroupByWithNone>("None");

  const handleGrouping = (
    event: React.ChangeEvent<{
      value: IGroupByWithNone;
    }>
  ) => {
    const _groupBy = event.target.value;
    setGroupBy(_groupBy);
  };

  const handleSearch = (
    event: React.ChangeEvent<{
      value: string;
    }>
  ) => {
    const _searchValue = event.target.value;
    setSearchValue(_searchValue);
  };

  return (
    <main className="todo-container">
      <header>
        <h1>ToDo App</h1>
      </header>
      <section>
        <TasksContext.Provider
          value={{ tasks, setTasks, searchValue, groupBy }}
        >
          <CreateTask />
          <div className="grouping-and-searching">
            <GroupTasks groupBy={groupBy} handleGrouping={handleGrouping} />
            <SearchTasks handleSearch={handleSearch} />
          </div>
          <TaskTabs />
        </TasksContext.Provider>
      </section>
    </main>
  );
};

export default TodoContainer;
