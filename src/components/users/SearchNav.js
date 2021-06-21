// import React from 'react'
// import { getAllUsers } from '../../lib/api'
// import ReactMultiSelectCheckboxers from 'react-multiselect-checkboxes'
// import { useLocation } from 'react-router'

// function UserIndex( { setFilteredUsers, searchValue, handleSearch, handleMultiTypeSelect }) {

//   const [teachers, setTeachers] = React.useState([])
//   const location = useLocation()

//   React.useEffect(() => {
//     const getTeachers = async () => {
//       try {
//         const { data } = await getAllUsers()
//         console.log(data)
//         setTeachers(data)
//         setFilteredUsers(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getTeachers()
//   }, [])

//   console.log(teachers)

//   const instruments = [
//     { label: 'Bassoon', value: 'Bassoon' },
//     { label: 'Cello', value: 'Cello' },
//     { label: 'Clarinet', value: 'Clarinet' },
//     { label: 'Cornet', value: 'Cornet' },
//     { label: 'Double Bass', value: 'DoubleBass' },
//     { label: 'Drums', value: 'Drums' },
//     { label: 'Flute', value: 'Flute' },
//     { label: 'French Horn', value: 'French Horn' },
//     { label: 'Guitar', value: 'Guitar' },
//     { label: 'Harp', value: 'Harp' },
//     { label: 'Harp', value: 'Harp' },
//     { label: 'Oboe', value: 'Oboe' },
//     { label: 'Harp', value: 'Harp' },
//     { label: 'Piano', value: 'Piano' },
//     { label: 'Saxophone', value: 'Saxophone' },
//     { label: 'Harp', value: 'Harp' },
//     { label: 'Timpani', value: 'Timpani' },
//     { label: 'Trombone', value: 'Trombone' },
//     { label: 'Trumpet', value: 'Trumpet' },
//     { label: 'Tuba', value: 'Tuba' },
//     { label: 'Viola', value: 'Viola' },
//     { label: 'Violin', value: 'Violin' },
//     { label: 'Xylophone', value: 'Xylophone' }
//   ]

// }

// return (
//   <>
//   <div className="index-menu-banner">

//   </div>

// )



export default UserIndex
