import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebaouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebaouncedValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
