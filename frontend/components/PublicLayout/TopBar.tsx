import { useRouter } from 'next/router'

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="top-bar">
      <div className="container">
          <img src="" alt="error" />
          <div className="menu">
            <div className="menu-item" onClick={() => router.push('/')}>home</div>
            <div className="menu-item" onClick={() => router.push('/login')}>sign up</div>
            <button className="btn">log in</button>
          </div>
      </div>
    </div>
  )
}