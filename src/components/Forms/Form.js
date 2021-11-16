import useForm from "../../hooks/useForm"
import validate from "../../validations/FormValidation"
// import onBlur_validate from "../../validations/OnblurValiation"
const Form = () => {
  const { values, errors, handleChange, handleSubmit, onBlurOut } = useForm(
    login,
    validate
  )
  function login() {
    alert("submited")
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor>Name</label>
              <input
                type="text"
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                onBlur={onBlurOut}
                className={`form-control ${errors.name && "is-invalid"}`}
                placeholder
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor>Email</label>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                onBlur={onBlurOut}
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor>Phone Number</label>
              <input
                type="text"
                name
                id
                className="form-control"
                placeholder
                aria-describedby="helpId"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div class="form-group">
              <label for="">Choose The City</label>
              <select class="form-control" name="" id="">
                <option value="Trichy">Trichy</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="experinence"
                  />
                  Display value
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="experinence"
                  />
                  Display value
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor>Choose Image</label>
              <input
                type="file"
                className="form-control-file"
                name
                id
                placeholder
                aria-describedby="fileHelpId"
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form
