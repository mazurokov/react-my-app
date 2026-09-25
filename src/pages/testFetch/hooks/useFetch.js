import {useEffect, useState} from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const localFetch = async ({ signal } = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setData(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
        setError(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    const controller = new AbortController();
    localFetch({ signal: controller.signal });
    return () => controller.abort();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;