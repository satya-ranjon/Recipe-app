import { useEffect, useState } from "react";

function usePopularFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const chack = localStorage.getItem("popular");
    if (chack) {
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
          localStorage.setItem("popular", JSON.stringify(data));
        } catch (err) {
          console.log(err);
          setError(true);
          setLoading(false);
        }
      };
      requestFetch();
    }
  }, [url]);

  return { loading, error, result };
}

export default usePopularFetch;
