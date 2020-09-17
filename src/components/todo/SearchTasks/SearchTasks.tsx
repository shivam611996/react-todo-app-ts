import React from "react";

import MuiTextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

interface IProps {
  handleSearch: (
    event: React.ChangeEvent<{
      value: string;
    }>
  ) => void;
}

const SearchTasks = ({ handleSearch }: IProps) => {
  return (
    <MuiTextField
      label="Search field"
      type="search"
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        )
      }}
    />
  );
};

// SearchTasks.propTypes = {
//   handleSearch: PropTypes.func,
// };

export default SearchTasks;
