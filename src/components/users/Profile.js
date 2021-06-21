import React from 'react'
import { getUser , addReview  } from '../../lib/api'
import { useParams  } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import {  getPayload } from '../../lib/auth'
// import { useHistory } from 'react-router-dom'



function Profile(){
  const [currentUser, setCurrentUser] = React.useState(null)
  const { id } = useParams()
  const payload = getPayload()
  // const history = useHistory()
  const { formdata, handleChange } = useForm({
    content: '',
    rating: '',
    createdAt: '',
    user: payload.sub,
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

  const handleAddReview = async event => {
    event.preventDefault()

    try {
      await addReview(formdata,id)
      const { data } = await getUser()
      getUser(data)
    } catch (err) {
      console.log(err)
    }
    alert(`Submitting form ${JSON.stringify(formdata, null, 2)}`)
  }



  return (
    <>
      {currentUser ?
    
        <>
      
          <div className="columns box">
            <div className="column block">
              <img src={currentUser.profileImage} alt="" className="user-profile-image ml-6"/>        
            </div>
            <div className="column is-two-thirds is-size-5">
              <h4> Hello , my name is {currentUser.firstName}</h4>
              <h4> 
                {currentUser.userType === 'Teacher' ?
                  `I am teaching  ${currentUser.instrumentType}`
                  :
                  `I am learning  ${currentUser.instrumentType}`      
                } 
              </h4>
            </div>
          </div>
          <h1 className="box is-size-3">About me </h1>
          <hr/>
          <div className=" columns box ">
            <div className='column is-7'> 

              <p className="is-size-5"> {currentUser.bio}
              </p>
            </div>
          </div>
          
          <div className="column box ">
            
            <h1 className="is-size-5">
              {currentUser.userType === 'Teacher' ?
                'Reviews' : 'Recommendations' }
            </h1>
            <br />
            { currentUser.userType ?

              currentUser.reviewsReceived.map(review =>(
                
                <div key={review.id}>
                  <ul className="is-size-6">Rating {'★'.repeat(review.rating)} </ul>

                  <ul is-size-6> {review.content} </ul>
                  <hr />
                </div>
              ))
              : 
              <p>Loading</p>
            }
            

          </div>



          <form onSubmit={handleAddReview} >
            <div>
              <label>Write a comment </label>
            </div>
            <div>  
              <textarea
                onChange={handleChange}
                name="content"
                value={formdata.content}
                placeholder="Leave a review..." /> 
            </div>
            <div>
              <label>Rate from 1 to 5</label>
            </div>
            
            <div className="rating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>

              <input className="rating"
                type="number" 
                onChange={handleChange}
                name="rating"
                min="1"
                max="5"
            
                value={formdata.rating} />
            </div>
                  
            <button className="yellow-background">Submit Review</button>
            

          </form>

        </>
        :
        <p>Loading</p>
      }
    </>
  )
}

export default Profile