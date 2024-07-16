import React, { useState, useEffect } from "react";

export const API_URL = `http://localhost:8080/api/movies`;

const useFetch = (value) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);
      setIsLoading(false);
      setMovie(data.Search || data);
      setIsError({ show: "false", msg: "" });
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}`);
    }, 1000);
    // console.log("set");
    return () => {
      clearTimeout(timeOut);
      // console.log("clear");
    };
  }, [value]);

  return { isLoading, isError, movie };
};

export default useFetch;