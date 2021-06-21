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


  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="winter-background-image hero-body">
        <input
          className="input is-medium is-success"
          placeholder="Search by instrument type or location.."
          onChange={handleInput}
          value={searchTerm}
        />
        <button className="button" type="button" onClick={handleClear}>Clear</button>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {/* {isError && <Error />}
            {isLoading && <p>...loading</p>} */}
            {filteredUsers && (
              filteredUsers.map(user =>  <div key={user._id} className="column is-3">
                <Link to={`/profile/${user.id}`}>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title">{user.username}</div>
                    </div>
                    <div className="card-header">
                      <div className="card-header-title">{user.location}</div>
                    </div>
                    <div className="card-image">
                      <figure className="image image-is-1by1">
                        <img className="cardimg" src={user.profileImage} alt={user.username} />
                      </figure>
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

