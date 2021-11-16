import { useEffect, useState } from "react"
const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }
    },
    [errors]
  )

  const handleSubmit = event => {
    event.preventDefault()

    setIsSubmitting(true)
    setErrors(validate(values))
  }

  const handleChange = event => {
    event.persist()
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onBlurOut = event => {
    event.persist()
    setValues({ ...values, [event.target.name]: event.target.value })
    setErrors(validate(values))
  }

  return { values, errors, handleChange, handleSubmit, onBlurOut }
}

export default useForm
