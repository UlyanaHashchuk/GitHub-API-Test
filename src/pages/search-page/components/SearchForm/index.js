import React, { useState } from 'react'
import { Form, Label, Input, Button } from './index.styles'

export default ({ onSubmit }) => {
  const [userName, setUserName] = useState('')
  const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateInputValue(userName)) {
      fetch(`https://api.github.com/users/${userName}`).then((resp) =>
        resp.json().then((jsonResp) => {
          onSubmit(jsonResp)
          setUserName('')
        })
      )
    }
  }

  const validateInputValue = (value) => {
    if (!value || value === '') {
      setError('required')
      return true
    } else if (!value.match(/^[A-z|0-9]+[A-z|0-9|-]*$/g)) {
      setError('wrongFormat')
      return true
    } else if (value.length > 39) {
      setError('exceededSize')
      return true
    }
    return false
  }

  const onChange = ({ target: { value } }) => {
    setError(null)

    return setUserName(value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Enter GitHub user profile name</Label>
      <Input
        type="text"
        value={userName}
        onChange={onChange}
        placeholder="Profile name..."
      />
      {error === 'required' && <>Value is required</>}
      {error === 'wrongFormat' && <>Name should be in format [A-z|0-9|-]</>}
      {error === 'exceededSize' && (
        <>Name length should be between 1 and 39 characters</>
      )}
      <Button type="submit" disabled={!!error}>
        Search
      </Button>
    </Form>
  )
}
