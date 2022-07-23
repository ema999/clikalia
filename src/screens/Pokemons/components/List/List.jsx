import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import "./List.scss";

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "url", headerName: "URL", width: 350 },
];

export const List = React.memo(({ pokemons, loading }) => {
  const navigate = useNavigate();
  const handleOnRowClick = (params) => {
    navigate(`/pokemon${params.row.url.split("pokemon")[1]}`, {
      replace: true,
    });
  };

  return (
    <div className="List">
      <DataGrid
        rows={pokemons}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        onRowClick={(params, event) => {
          handleOnRowClick(params);
          event.defaultMuiPrevented = true;
        }}
        components={{
          LoadingOverlay: LinearProgress,
        }}
        loading={loading}
        getRowClassName={() => `row`}
      />
    </div>
  );
});

List.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
