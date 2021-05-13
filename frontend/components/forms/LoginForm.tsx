import React from 'react'

export default function LoginForm() {
  return (
    <form action="">
      <h2>log in</h2>
      <label htmlFor="#username">user name</label>
      <input id="username" type="text" placeholder="user name" />
      <label htmlFor="#password">password</label>
      <input id="password" type="text" placeholder="password" />
    </form>
  )
}
