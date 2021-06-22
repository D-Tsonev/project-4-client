// import React from 'react'
// import { login } from '../../lib/api'
// import { setToken } from '../../lib/auth'
// import { useHistory } from 'react-router'
// import { useForm } from '../../hooks/useForm'


// function Login () {
//   const history = useHistory()
//   const [isError, setIsError] = React.useState(false)
//   const { formdata, handleChange } = useForm({
//     email: '',
//     password: '',
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await login(formdata)
//       setToken(res.data.token)
//       history.push('/items')
//     } catch (err) {
//       setIsError(true)
//     }
//   }

//   const handleFocus = () => {
//     setIsError(false)
//   }

//   return (
//     <div >
//       <section className="hero-body columns">
//         <img className="column is-two-thirds ml-5 img" id="home-picture" src=''/>
//         <div className="container column ">
//           <div className="column ">
//             <form
//               className="column is-two-thirds form ml-6"
//               onSubmit={handleSubmit}
//             >
//               <div className="field ">
//                 <label className="label ">Email</label>
//                 <div className="control">
//                   <input
//                     className="input"
//                     placeholder="Email"
//                     name="email"
//                     onFocus={handleFocus}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Password</label>
//                 <div className="control">
//                   <input
//                     type="password"
//                     className="input"
//                     placeholder="Password"
//                     name="password"
//                     onFocus={handleFocus}
//                     onChange={handleChange}
//                   />
//                 </div>{isError && <small className="help is-danger">Your credentials are incorrect, please check and try again</small>}

//               </div>
//               <div className="field">
//                 <button type="submit" className="button is-fullwidth is-dark">
//                 Log Me In!
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Login
function Home() {

  return (
    <>
      <section className="hero is-fullheight-with-navbar is-grey-darker">
        <div className="hero-body">
          <div className="container">
            <h2>What is Music Makers?</h2>
            <p>The benefits of learning to play a musical instrument as a child are well documented in terms of teaching children invaluable skills that they will need beyond practise and playing,
          yet in most schools, music education is severely underfunded and under-resourced, and for students there are many barriers to entry.
          Learning a musical instrument is expensive and often feels like an elitist thing to do, especially if learning an orchestral instrument.
            </p><br/>
            <p>Our platform pairs students from leading conservatoires and music degrees with aspiring young musicians from low-income families, offering kids free music tuition,
          breaking down the barriers to entry for most families who are simply unable to afford lessons.
            </p>

          </div>
        </div>
      </section>
      <section className="main-area">
        <div className="main-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2>How it works</h2>
                <p>The benefits of learning to play a musical instrument as a child are well documented in terms of teaching children invaluable skills that they will need beyond practise and playing,
          yet in most schools, music education is severely underfunded and under-resourced, and for students there are many barriers to entry.
          Learning a musical instrument is expensive and often feels like an elitist thing to do, especially if learning an orchestral instrument.
                </p>
                <p>
          Our platform pairs students from leading conservatoires and music degrees with aspiring young musicians from low-income families, offering kids free music tuition,
          breaking down the barriers to entry for most families who are simply unable to afford lessons.
                </p>
              </div>
              <div className="column">
                <img src="https://res.cloudinary.com/dosqoxtnj/image/upload/c_scale,h_448/v1624311302/Main-Page-Life-Changing-Stories_xiq6lh.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-area-bottom">
        <div className="main-body-bottom">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img src="https://res.cloudinary.com/dosqoxtnj/image/upload/c_crop,h_440,w_660/v1624312262/In_Harmony_Nottingham_AlanFletcher_ddijvd.jpg"/>
              </div>
              <div className="column">
                <h2>Meet Brody</h2>
                <p>The benefits of learning to play a musical instrument as a child are well documented in terms of teaching children invaluable skills that they will need beyond practise and playing,
          yet in most schools, music education is severely underfunded and under-resourced, and for students there are many barriers to entry.
          Learning a musical instrument is expensive and often feels like an elitist thing to do, especially if learning an orchestral instrument.
                </p>
                <p>
          Our platform pairs students from leading conservatoires and music degrees with aspiring young musicians from low-income families, offering kids free music tuition,
          breaking down the barriers to entry for most families who are simply unable to afford lessons.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
