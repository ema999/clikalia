import { useState, useEffect } from "react";
import { API_URL } from "const";
import axios from "axios";

export const usePokemonForms = (url) => {
  const [formDetail, setFormDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const formDetail = response.data;
        setFormDetail(formDetail);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    url && fetchData();
  }, [url]);

  return { formDetail, loading, error };
};
