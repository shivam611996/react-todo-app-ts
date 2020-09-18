import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "./TabPanel/TabPanel";
import TodoTable from "../TodoTable/TodoTable";
import { ITab } from "../../../interfaces/interfaces";

const a11yProps = (value: string) => {
  return {
    id: `${value}-taks-tab`,
    "aria-controls": `${value}-tasks-tabpanel`,
  };
};

const TaskTabs = () => {
  const [value, setValue] = React.useState<ITab>("All");

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: ITab
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="task current state tabs"
      >
        <Tab value="All" label="All" {...a11yProps("all")} />
        <Tab value="Pending" label="Pending" {...a11yProps("pending")} />
        <Tab value="Completed" label="Completed" {...a11yProps("completed")} />
      </Tabs>
      <TabPanel value={value} index="All">
        <TodoTable type="All" />
      </TabPanel>
      <TabPanel value={value} index="Pending">
        <TodoTable type="Pending" />
      </TabPanel>
      <TabPanel value={value} index="Completed">
        <TodoTable type="Completed" />
      </TabPanel>
    </>
  );
};

export default TaskTabs;
