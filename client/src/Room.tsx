import React, { useEffect, useContext } from 'react'
import Video from './components/Video/Video'
import Options from './components/options/Options'
import VideoContext from './context/VideoContext'
import Chat from './components/Chat/Chat'
import { VideoNote } from './constant'
const Room: React.FC = () => {
  const { showChat, showMobileChat } = useContext(VideoContext)

  useEffect(() => {
    if (!navigator.onLine) alert('Connect to internet!')
  }, [navigator])

  useEffect(() => {
    const cookies: string[] = document.cookie.split(';')
    cookies.map((cookie: string) => {
      const name: string = cookie.split('=')[0]
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    })
  }, [])

  return (
    <main className="flex flex-row">
      <section
        className={`bg-home flex ${
          showChat ? 'w-[70%]' : 'w-screen'
        } flex-col items-center justify-center bg-brand_primary_color min-h-screen`}
      >
        <div className="App" style={{ height: '100%', width: '100%' }}>
          <Video />
          <Options />
          <p className="text-white text-xs text-center font-secondary">
            {VideoNote}
          </p>
        </div>
      </section>
      {showChat && (
        <div className="hidden sm:flex md:w-[30%] bg-gray-100 p-4">
          <Chat />
        </div>
      )}
      {showMobileChat && (
        <div className="sm:hidden fixed w-full left-0 bg-white pt-2 bottom-0 rounded-t-2xl">
          <Chat />
        </div>
      )}
    </main>
  )
}

export default React.memo(Room)
