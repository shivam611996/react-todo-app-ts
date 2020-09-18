import React from "react";

import Box from "@material-ui/core/Box";

import { ITab } from "../../../../interfaces/interfaces";

interface IProps {
  children: JSX.Element;
  index: ITab;
  value: ITab;
}

const TabPanel = ({ children, value, index, ...other }: IProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${value}-taks-tabpanel`}
      aria-labelledby={`${value}-tasks-tabpanel`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
