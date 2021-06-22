import React from 'react'
import { getAllUsers } from '../../lib/api'
// import Error from '../common/Error'
import ProfileCard from './ProfileCard'

function TeachersIndex() {
  const [users, setUsers] = React.useState(null)
  // const [isError, setIsError] = React.useState(false)
  // const isLoading = !users & !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllUsers()
        setUsers(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const filteredUsers = users?.filter((users) => {
    return (
      users.userType === 'Teacher'
    )
  })

  console.log(users)
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="search-bar">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {/* {isError && <Error />}
              {isLoading && <p>...loading</p>} */}
              {filteredUsers && (
                filteredUsers.map(user => <ProfileCard key={user._id} {...user} />)
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default TeachersIndex