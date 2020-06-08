
import { useState } from 'react';


export const useForm = (InitialValue) => {

  const [values, setValues] = useState(InitialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};

export default useForm;