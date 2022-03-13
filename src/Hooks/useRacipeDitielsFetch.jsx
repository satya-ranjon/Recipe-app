import { useEffect, useState } from "react";

function useRacipeDitielsFetch(url, pram) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const chack = localStorage.getItem("ditielsRacipe");
    const racipeId = localStorage.getItem("racipeId");

    if (racipeId === pram) {
      setResult(JSON.parse(chack));
    } else {
      const requestFetch = async () => {
        try {
          setLoading(true);
          setError(false);
          const response = await fetch(url);
          const data = await response.json();
          setLoading(false);
          setResult(data);
          localStorage.setItem("ditielsRacipe", JSON.stringify(data));
          localStorage.setItem("racipeId", pram);
        } catch (err) {
          console.log(err);
          setError(true);
          setLoading(false);
        }
      };
      requestFetch();
    }
  }, [url, pram]);

  return { loading, error, result };
}

export default useRacipeDitielsFetch;
