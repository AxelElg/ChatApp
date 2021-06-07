import TopBar from './TopBar';
import PageFoot from './PageFoot';

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