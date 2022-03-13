import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useCuisineFetch(url, pram) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const requestFetch = async (url, id) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setResult(data);
      localStorage.setItem(id.toString(), JSON.stringify(data));
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const italian = localStorage.getItem("italian");
    const american = localStorage.getItem("american");
    const thai = localStorage.getItem("thai");
    const japanese = localStorage.getItem("japanese");

    switch (pram) {
      case "italian":
        if (italian) {
          setResult(JSON.parse(italian));
        } else {
          requestFetch(url, "italian");
        }
        break;
      case "american":
        if (american) {
          setResult(JSON.parse(american));
        } else {
          requestFetch(url, "american");
        }
        break;
      case "thai":
        if (thai) {
          setResult(JSON.parse(thai));
        } else {
          requestFetch(url, "thai");
        }
        break;
      case "japanese":
        if (japanese) {
          setResult(JSON.parse(japanese));
        } else {
          requestFetch(url, "japanese");
        }
        break;
      default:
        return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, pram]);

  return { loading, error, result };
}

export default useCuisineFetch;
