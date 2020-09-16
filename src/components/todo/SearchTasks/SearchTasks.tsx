import * as React from "react";

import MuiTextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const SearchTasks = ({ handleSearch }) => {
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
        ),
      }}
    />
  );
};

// SearchTasks.propTypes = {
//   handleSearch: PropTypes.func,
// };

export default SearchTasks;
