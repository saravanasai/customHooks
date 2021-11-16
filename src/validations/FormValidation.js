export default function validate(values, key) {
  const errors = {}

  if (!values.name) {
    errors.name = "name is required"
  }
  if (!values.email) {
    errors.email = "email is required"
  }

  return errors
}
