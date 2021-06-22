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
                <p>We beleive that music should be for everyone and so do our Music Maker Mentors, that&apos;s why they commit to teaching students who are passionate about music but maybe don&apos;t know where to begin.
                Sign up and book a taster session with one of our teachers where they will share why they love their particular instrument, demonstrate it&apos;s capabilities and give you a chance to try it out for yourself!
                <br/>
                <br/>
                Now you&apos;re hooked! Continue with your teacher who will tailor your lessons around your musical interests, teach you some music perhaps you&apos;ve never heard before, and if you&apos;re really keen, they will help guide you through your initial grade exams(not as scary as they sounds we promise!)
                </p>
                <br/>
                <br/>
                <p>
                Ready? Register now to start your music making journey with us!
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
                <h2>Meet Daniel</h2>
                <p>Daniel is in year eight and has been playing the cello since 2015 after signing up to Music Makers. He was always interested in music and showed great promise
                in music lessons and on the recommendation from his teacher, he signed up to Music Makers.
                </p>
                <br/>
                He told us: <blockquote>&quot;To me, my cello lesson is half an hour of peace. When I play, it feels like I have transported to a different universe. In the future I want to be a famous cellist like Sheku Kanneh-Mason.&quot;</blockquote>
                <p>
                  <br/>
                Not knowing which instrument he wanted to learn, he started to listed to some classical pieces and found he liked the sound of the cello, after an initial taster lesson with one of our tutors, he decided to start learning and has been playing ever since.
                  <br/>
                  <br/>
                His Mum says:
                  <br/>
                  <blockquote>&quot;There is never a dull moment at home now because he is always playing. I even have some tunes drilled into my head now. He sings a lot now and he is also teaching himself how to play the acoustic guitar which I find really amazing.&quot;</blockquote>
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
