import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";

import {
  getFilteredShows,
  getTop10Movies,
  getTop10Shows,
} from "../../api/videosApi";

import "./LandingSearchBar.css";

export default function LandingSearchBar({ toggle }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = setTimeout(async () => {
      var promise = null;

      if (inputValue.length === 0)
        promise = toggle === 0 ? getTop10Movies() : getTop10Shows();
      else if (inputValue.length >= 2) promise = getFilteredShows(inputValue);

      if (promise != null)
        promise
          .then((res) => setOptions(res.data.data))
          .catch(() => toast.error("Failed to load data"));

      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(fetchData);
  }, [inputValue, toggle]);

  const routeToItem = (val, newVal) => {
    if (newVal != null) history.push(`/item/${newVal.id}`);
  };

  return (
    <Autocomplete
      size="small"
      className="header-search-input"
      forcePopupIcon
      popupIcon={
        isLoading ? (
          <CircularProgress color="inherit" size={20} />
        ) : (
          <SearchIcon />
        )
      }
      onInputChange={(e, val) => setInputValue(val)}
      inputValue={inputValue}
      onChange={routeToItem}
      filterOptions={(options) => options}
      getOptionLabel={(option) => option.title}
      getOptionSelected={(option, value) => option.title === value.title}
      options={options}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search movies/shows"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: <>{params.InputProps.endAdornment}</>,
          }}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}
