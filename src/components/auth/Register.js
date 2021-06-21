import React from 'react'
import { useHistory } from 'react-router'
import { register } from '../../lib/api'
import { useForm } from '../../hooks/useForm'

function Register() {
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    userType: '',
    instrumentType: '',
    locationTypeChoices: '',
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(formdata)
      history.push('/login')
    } catch (err) {
      console.log(err)
      setFormErrors(err.response.data)
    }
  }

  console.log(formErrors)

  return (
    <div >
      <section className="section">
        <div className="container">
          <div className="columns">
            <form className="column is-half is-offset-one-quarter"
              onSubmit={handleSubmit}>
              <div className="field">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.username ? 'is-danger' : ''}`}
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={formdata.username}
                  />
                </div>
                {formErrors.username && (
                  <small className="help is-danger">{formErrors.username}</small>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.email ? 'is-danger' : ''}`}
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={formdata.email}
                  />
                </div>
                {formErrors.email && (
                  <small className="help is-danger">{formErrors.email}</small>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.password ? 'is-danger' : ''}`}
                    name="password" id="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Passord"
                    value={formdata.password}
                  />
                </div>
                {formErrors.password && (
                  <small className="help is-danger">{formErrors.password}</small>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <div >
                  <input
                    className={`input ${formErrors.passwordConfirmation ? 'is-danger' : ''}`}
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Password Conformation"
                    onChange={handleChange}
                    value={formdata.password_confirmation}
                  />
                </div>
                {formErrors.passwordConfirmation &&
                  <small className="help is-danger">
                    {formErrors.passwordConfirmation}
                  </small>
                }
              </div>
              
              <br />
              <section>
                <h4 className="title is-">Personal Details</h4>
                <br />
              </section>
              <br />
              <div className="field">
                <label className="label" htmlFor="firstName">
                  Firts Name 
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.firstName ? 'is-danger' : ''}`}
                    name="firstName" id="firstName"
                    type="firstName"
                    onChange={handleChange}
                    placeholder="First Name "
                    value={formdata.firstName}
                  />
                </div>
                {formErrors.preference && (
                  <small className="help is-danger">Enter your First Name</small>
                )}
              </div>

              <div className="field">
                <label className="label" htmlFor="lastName">
                  Last Name  
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.lastName ? 'is-danger' : ''}`}
                    name="lastName" id="lastName"
                    type="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    value={formdata.lastName}
                  />
                </div>
                {formErrors.preference && (
                  <small className="help is-danger">Enter your Last Name</small>
                )}
              </div>

              <div className="field">
                <label className="label" htmlFor="bio">
                  Bio 
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.bio ? 'is-danger' : ''}`}
                    name="bio" id="bio"
                    type="bio"
                    onChange={handleChange}
                    placeholder="Bio "
                    value={formdata.bio}
                  />
                </div>
                {formErrors.preference && (
                  <small className="help is-danger">Enter your bio</small>
                )}
              </div>
              

              <div className="select mr-3	">
                <select className={`input ${formErrors.userType ? 'is-danger' : ''}`}
                  name="userType" id="userType"
                  type="userType"
                  value={formdata.userType}
                  onChange={handleChange}
                  placeholder="userType">
                  <option selected>Profile</option>  
                  <option>Student</option>
                  <option>Teacher</option>
                </select> 
              </div>
              
              <div className="select mx-3">
                <select className={`input ${formErrors.instrumentType ? 'is-danger' : ''}`}
                  name="instrumentType" id="instrumentType"
                  type="instrumentType"
                  onChange={handleChange}
                  placeholder="instrumentType "
                  value={formdata.instrumentType}> 
                  <option selected>Instrument</option>       
                  <option>Piano</option>
                  <option>Drums</option>
                  <option>Timpani</option>
                  <option>Xylophone</option>
                  <option>Cornet</option>
                  <option>Tuba</option>
                  <option>Trombone</option>
                  <option>French Horn</option>
                  <option>Trumpet</option>
                  <option>Saxophone</option>
                  <option>Bassoon</option>
                  <option>Clarinet</option>
                  <option>Oboe</option>
                  <option>Flute</option>
                  <option>Guitar</option>
                  <option>Harp</option>
                  <option>Double Bass</option>
                  <option>Cello</option>
                  <option>Violin</option>
                </select> 
              </div>

              <div className="select mx-3" >
                <select className={`input ${formErrors.locationTypeChoices ? 'is-danger' : ''}`}
                  name="locationTypeChoices" id="locationTypeChoices"
                  type="locationTypeChoices"
                  onChange={handleChange}
                  placeholder="locationTypeChoices ">
                  <option selected>City</option>  
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Birmingham</option>
                  <option>Liverpool</option>
                  <option>Leeds</option>
                  <option>Newcastle</option>
                  <option>Edinburgh</option>
                  <option>Glasgow</option>
                  <option>Cambridge</option>
                  <option>Bristol</option>
                  <option>Cardiff</option>
                  <option>Belfast</option>
                  <option>York</option>
                  <option>Sheffield</option>
                </select> 
              </div>
              <br />
              <br />

              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">Register Me!</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Register