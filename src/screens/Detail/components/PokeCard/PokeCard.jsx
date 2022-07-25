import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { usePokemonForms } from "hooks/usePokemonForms";
import "./PokeCard.scss";

export const PokeCard = ({ detail }) => {
  const { formDetail } = usePokemonForms(detail?.forms[0].url);

  return (
    <div className="PokeCard" data-testid="PokeCard">
      <Card sx={{ maxWidth: 445 }}>
        <CardMedia
          component="img"
          image={detail.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <h2>{detail.name}</h2>
          {formDetail && (
            <>
              <Typography variant="body2" color="text.secondary">
                Form ID: {formDetail.id ? formDetail.id : "-"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Only battle: {formDetail.is_battle_only ? "Yes" : "No"}
              </Typography>
            </>
          )}
          <div>
            <h5>Abilities</h5>
            <List>
              {detail.abilities
                .filter((ability) => !ability.is_hidden)
                .map((ability) => (
                  <ListItem key={ability.ability.name} disablePadding>
                    <ListItemText
                      primary={ability.ability.name
                        .replace("-", " ")
                        .toUpperCase()}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

PokeCard.propTypes = {
  detail: PropTypes.object,
};
