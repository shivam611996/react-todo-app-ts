import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import { headCells } from "../../../../constants/todo";
import { ITask } from "../../../../interfaces/interfaces.d";

interface IProps {
  order: "asc" | "desc";
  orderBy: keyof ITask;
  onRequestSort: (property: keyof ITask) => void;
}

const TodoTableHead = ({ order, orderBy, onRequestSort }: IProps) => {
  const createSortHandler = (property: keyof ITask) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) =>
          headCell.id !== "actions" ? (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className="visually-hidden">
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
};

export default TodoTableHead;
