import { useCallback, useState } from 'react';

const useToggle = (opts) => {
  const values = [...opts];
  const [index, setValue] = useState(0);
  const setToggle = useCallback((mod) => {
    if (index > -1) {
      setValue(index + mod);
    }
    if (index < 1) {
      setValue(Math.abs(index - (values.length - 1)));
    }
  }, [index]);
  return [values[index % values.length], setToggle];
};

export default useToggle;
