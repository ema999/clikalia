import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.scss";

export default function SearchBar({ handleChange }) {
  const [isBloqued, setIsBloqued] = useState(false);

  const onChangeValue = (event) => {
    if (isBloqued) return;
    setIsBloqued(true);
    setTimeout(() => {
      setIsBloqued(false);
      handleChange(event.target.value);
    }, 500);
  };

  return (
    <div className="SearchBar">
      <TextField
        id="standard-basic"
        label="Search..."
        variant="standard"
        size="normal"
        fullWidth
        onChange={onChangeValue}
      />
    </div>
  );
}
