import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(endPoint);
      setData(res.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (endPoint) {
      fetchData();
    }
  }, [endPoint]);

  return { data, isError, isLoading };
};

export default useFetch;
