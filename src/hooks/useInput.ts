import { useState } from "react";

interface UseInputProps {
  initialValue: string;
}

const useInput = ({ initialValue }: UseInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(initialValue),
  };
};

export default useInput;
