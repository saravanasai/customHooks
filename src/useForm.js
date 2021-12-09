import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [isTouched, setIsTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setIsTouched(isTouched => ({ ...isTouched, [event.target.name]:true }))
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  
  const onBlurOut = (event) => {
    event.persist()
    setErrors(validate(values,isTouched))
  }
  return {
    handleChange,
    handleSubmit,
    onBlurOut,
    isTouched,
    values,
    errors,
  }
};

export default useForm;