import { useEffect, useState } from "react";

const cache = new Map();

export const useFetch = <T>(url: string, method: string) => {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: string;
  }>({
    data: cache.get(url),
    loading: true,
    error: "",
  });

  useEffect(() => {
    console.log("ListProducts mounted!");
    if(cache.has(url)){

        setState({
            data: cache.get(url),
            loading: false,
            error: ''
        })
        return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const response = await fetch(url, { method, signal });
        if (!response.ok) {
          throw new Error(`An error occurred, ${response.status}`);
        }

        const data = await response.json();
        cache.set(url, data);

        setState({
          data,
          loading: false,
          error: "",
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: `An error occurred, ${err}`,
        });
      }
    })();
    return () => {
      controller.abort();
    };
  }, [url, method]);
  return state;
};
