import { useEffect, useState } from 'react';
import { Data } from '@app/params';

export const useFetch = (url: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFetch = () => {
    setIsLoading(true);
    setData([]);
    setIsError(false);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res as Data[]))
      .catch((e) => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    handleFetch();
  }, [url]);
  return { data, isError, isLoading };
};
