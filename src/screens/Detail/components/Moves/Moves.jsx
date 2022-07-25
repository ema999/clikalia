import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import "./Moves.scss";

export const Moves = ({ moves, deleteMove }) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
        display: "flex",
        gap: "2rem",
        flexGrow: "0.5",
      }}
      className="Moves"
    >
      <div className="container">
        <h3>MOVES</h3>
        <List>
          {moves?.map((move) => (
            <ListItem
              key={move.move.name}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteMove(move.move.name);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemText
                primary={move.move.name.replace("-", " ").toUpperCase()}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
};

Moves.propTypes = {
  moves: PropTypes.array,
  deleteMove: PropTypes.func,
};
