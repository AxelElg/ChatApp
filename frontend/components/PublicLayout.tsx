import TopBar from './PublicLayout/TopBar';
import PageFoot from './PublicLayout/PageFoot';

export default function PublicLayout({children}) {
  return (
    <>
      <TopBar />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      <PageFoot />
    </>
  )
}