import React from 'react'

export function useForm(initialFormdata) {
  const [formdata, setFormdata] = React.useState(initialFormdata)
  const [formErrors, setFormErrors] = React.useState(initialFormdata)

  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleImageUpload = file => {
    setFormdata({ ...formdata, profileImage: file })
  }

  return {
    formdata,
    formErrors,
    handleChange,
    handleImageUpload,
    setFormdata,
    setFormErrors,
  }
}
