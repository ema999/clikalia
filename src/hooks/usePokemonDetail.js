import { useState, useEffect, useCallback } from "react";
import { API_URL } from "const";
import axios from "axios";

export const usePokemonDetail = ({ id }) => {
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sortMoves = useCallback((detail) => {
    const sortedMoves = detail.moves.sort((a, b) => {
      const idA = Number(a.move.url.split("/").slice(-2)[0]);
      const idB = Number(b.move.url.split("/").slice(-2)[0]);
      return idA < idB ? -1 : idA > idB ? 1 : 0;
    });
    return { ...detail, moves: sortedMoves };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pokemon/${id}`);
        const detail = response.data;
        setDetail(sortMoves(detail));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    id && fetchData();
  }, [id, sortMoves]);

  const deleteMove = useCallback(
    (name) => {
      setDetail({
        ...detail,
        moves: detail.moves.filter((move) => move.move.name !== name),
      });
    },
    [detail]
  );

  return { detail, loading, error, deleteMove };
};
