import { useEffect, useRef, useState } from "react";

export default function useAsync(task) {
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const mountedRef = useRef(true);
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const initiate = (args) => {
    setStatus("pending");
    task(args)
      .then((response) => {
        if (mountedRef.current) {
          setResponse(response);
          setStatus("fulfilled");
        }
      })
      .catch((error) => {
        if (mountedRef.current) {
          setError(error);
          setStatus("rejected");
        }
      });
  };

  return [initiate, status, response, error];
}
