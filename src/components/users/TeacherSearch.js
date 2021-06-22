import React from 'react'
// import Error from '../common/Error'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../../lib/api'
// import ProfileCard from './ProfileCard'

function TeacherSearch() {
  const [users, setUsers] = React.useState(null)
  // const [isError, setisError] = React.useState(null)
  // const isLoading = !users & !isError
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() =>{
    const getData = async () => {
      try {
        const res = await getAllUsers()
        setUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  const filteredUsers = users?.filter((user) => {
    return (
      user.locationTypeChoices.toLowerCase().includes(searchTerm) ||
      user.instrumentType.toString().toLowerCase().includes(searchTerm)
      
    )
  })

  console.log(users)

  return (
    <section className="hero-search">
      <div className="hero-body search">
        <input
          className="input is-medium search-input"
          placeholder="Search by instrument type or location.."
          onChange={handleInput}
          value={searchTerm}
        />
        <button className="button clearbutton" type="button" onClick={handleClear}>Clear</button>
      </div>
      <section className="section teachbg">
        <div className="container">
          <div className="columns is-multiline">
            {/* {isError && <Error />}
            {isLoading && <p>...loading</p>} */}
            {filteredUsers && (
              filteredUsers.map(user =>  <div key={user.id} className="column is-3">
                <Link to={`/profile/${user.id}`}>
                  <div className="card-inst">

                    <div className="card-image-inst">
                      <figure className="image image-is-1by1">
                        <img className="cardimg" src={user.profileImage} alt={user.username} />
                      </figure>
                    </div>

                    <div className="card-header-inst">
                      <div className="card-header-title-teach">{user.username} <br/> {user.locationTypeChoices}</div>
                    </div>

                  </div>
                </Link>
              </div>
              )
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default TeacherSearch

