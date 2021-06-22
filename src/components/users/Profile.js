import React from 'react'
import { getUser , addReview , deleteReview } from '../../lib/api'
import { useParams  } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import {  getPayload, isOwner } from '../../lib/auth'
// import { useHistory } from 'react-router-dom'



function Profile(){
  const [currentUser, setCurrentUser] = React.useState(null)
  const { id } = useParams()
  const payload = getPayload()
  
  const { formdata, handleChange } = useForm({
    content: '',
    rating: '',
    createdAt: '',
    user: id,
    owner: payload.sub,
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getUser(id)
        setCurrentUser(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])
  console.log(id)
  console.log(currentUser)
  console.log(isOwner())
  console.log(payload.sub)

  const handleAddReview = async event => {
    event.preventDefault()

    try {
      await addReview(formdata,id)
      const { data } = await getUser(id)
      
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
    // alert(`Submitting form ${JSON.stringify(formdata, null, 2)}`)
  }

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId)
      const { data } = await getUser(id)
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <>
      {currentUser ?
    
        <>
          <section className="section teachbg">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">
                  <img src={currentUser.profileImage} alt="{currentUser.firstName}" className="teacherimg" />
                  <br/><br/>
                </div>
                <div className="column is-two-thirds">
                  <h4> Hello,<br/> my name is {currentUser.firstName}<br/>
                    {currentUser.userType === 'Teacher' ?
                      ` and I teach the ${currentUser.instrumentType}`
                      :
                      ` and I am interested in learning the ${currentUser.instrumentType}`
                    }
                  </h4>
                  <br/>
                  <p className="is-size-5"> {currentUser.bio} <br /><br /></p>

                  <div className="container">
                    <h1 className="is-size-5">
                      {currentUser.userType === 'Teacher' ?
                        'Reviews' : 'Recommendations' }
                    </h1>
                    <br />
                    { currentUser.userType ?
                      currentUser.reviewsReceived.map(review =>(
                        <div key={review.id}>
                          <ul className="is-size-6">Rating {'★'.repeat(review.rating)} </ul>
                          <ul is-size-6>{review.content}  </ul>
                          
                          {(payload.sub === review.owner) ?
                            ( <button className="button is-white" onClick={() => handleDeleteReview(review.id)}>Delete</button>)
                            :
                            <br />
                          }
                          <hr />
                          <br />
                        </div>
                      ))
                      :
                      <p>Loading</p>
                    }
                  </div>

            
                  <div>
                    { (payload.sub !== currentUser.id ) ?
          
                      <form onSubmit={handleAddReview} >

                        <div>
                          <textarea className="textarea"
                            onChange={handleChange}
                            name="content"
                            value={formdata.content}
                            placeholder="Leave a review..." />
                        </div>
                        <div><br/>
                          <label>Rate from 1 to 5</label>
                        </div>
                        <div>
                          <input className="rating"
                            type="number"
                            onChange={handleChange}
                            name="rating"
                            min="1"
                            max="5"

                            value={formdata.rating} />
                        </div>
                        <br/>
                        <button className="button is-white">Submit</button>


                      </form>
                      :
                      <br />
                    }
                  </div><br /><br /><br /><br /><br /></div>
              </div>
            </div>
          </section>
        </>
        
        :
        <p>Loading</p>
      }
      
    </>
    
  )
}

export default Profile