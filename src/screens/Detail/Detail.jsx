import { Header } from "commons";
import { usePokemonDetail } from "hooks/usePokemonDetail";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { PokeCard } from "./components";
import { Moves } from "./components/Moves/Moves";
import "./Detail.scss";

export const Detail = () => {
  const { id } = useParams();
  const { detail, loading, deleteMove } = usePokemonDetail({ id });

  return (
    <div className="Detail">
      <Header />
      <Container maxWidth="md">
        {detail && (
          <div className="container">
            <PokeCard detail={detail} />
            <Moves moves={detail.moves} deleteMove={deleteMove} />
          </div>
        )}
        {loading && <CircularProgress data-testid="progress" />}
      </Container>
    </div>
  );
};
