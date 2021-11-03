import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    // try {

    // } catch (err) {

    // }

    // fetch(requestConfig.url, {
    //   method: requestConfig.method ? requestConfig.method : "GET",
    //   headers: requestConfig.headers ? requestConfig.headers : {},
    //   body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Request failed!");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     applyData(data);
    //   })
    //   .catch((err) => {
    //     setError(err.message || "Something went wrong!");
    //   });

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json(); //assigning data to our resolved promise
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest,
  };
};

export default useHttp;
