import { useEffect, useState } from "react";

function useSearchResultFetch(url, pram) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const chack = localStorage.getItem("searchResult");
    const pramOne = localStorage.getItem("oldpram");

    if (pramOne === pram) {
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
          localStorage.setItem("searchResult", JSON.stringify(data));
          localStorage.setItem("oldpram", pram);
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

export default useSearchResultFetch;
