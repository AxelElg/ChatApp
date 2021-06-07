import React from 'react'
import PublicLayout from '../PublicLayout'

export default function index() {
  return (
    <PublicLayout>
      <div className="landing-cta">
        <div>
          <h1>Welcome To X-chat</h1>
          <p>the secret chat app to send and reside messages away from prying eyes</p>
        </div>
        <img src="" alt="" />
      </div>

      <div>
        <h2>Get Started</h2>
        <button className="btn">Sign up</button>
        <button className="btn">Log in</button>
      </div>
    </PublicLayout>
  )
}
