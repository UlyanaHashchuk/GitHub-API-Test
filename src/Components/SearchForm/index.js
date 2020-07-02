import React, { useState } from 'react'
import { Form, Label, Input, Button } from './index.styles'

export default ({ onSubmit }) => {
  const [userName, setUserName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    return fetch(`https://api.github.com/users/${userName}`)
      .then((resp) => resp.json())
      .then((jsonResp) => {
        onSubmit(jsonResp.data)
        setUserName('')
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Enter GitHub user profile name</Label>
      <Input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="Profile name..."
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}
