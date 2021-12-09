export default function validate(values,isTouched) {
  let errors = {};
  console.log(isTouched);
  console.log(values);
  if (!values.email &&  isTouched.email ) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)  &&  isTouched.email) {
    errors.email = 'Email address is invalid';
  }
  if ( isTouched.password &&!values.password   ) {
    errors.password = 'Password is required';
  } else if (isTouched.password &&!values.password.length < 8 ) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};
