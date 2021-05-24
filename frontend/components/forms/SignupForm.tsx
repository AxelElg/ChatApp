import React, {useState} from 'react'

export default function SignupForm() {

  const [errorInput, setErrorInput] = useState(false)

  const tryLogin : any  = async event => {
    event.preventDefault()

    const userName: string = event.target.username.value;
    const password: string = event.target.password.value;
    
    if (userName.length && password.length > 0) {
      const res = await fetch('/api/login', {
        body: JSON.stringify({
          name: event.target.username.value,
          pass: event.target.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(res => res).then(result => {
        console.log(result);  
      }).catch(
        setErrorInput(true)
      )  
    }
  }

  return (
    <form onSubmit={tryLogin} className={errorInput ? 'error' : undefined}>
      <h2>Sign Up</h2>
      <label htmlFor="#username">set user name</label>
      <input id="username" type="text" placeholder="user name" />
      <label htmlFor="#password">create password</label>
      <input id="password" type="text" placeholder="password" />
      <label htmlFor="#password">confirm password</label>
      <input id="password" type="checkbox"/>
      <input type="submit" value="Submit"/>
      {errorInput && (<div>hello</div>)}
    </form>
  )
}


