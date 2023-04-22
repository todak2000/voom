import React, { useEffect, useState, useContext } from 'react'
import Button from './components/buttons/Button'
import { IoVideocamOutline } from 'react-icons/io5'
import TextInput from './components/TextInput/TextInput'
import VideoContext from './context/VideoContext'
import VoomLogo from './favicon.svg'
import { useNavigate } from 'react-router-dom'
import { CopyNote, startMeetingText, joinMeetingText } from './constant'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { callUser, showChat } = useContext(VideoContext)

  const [joinId, setJoinId] = useState('')

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

  const handleStart = () => {
    navigate('/room')
  }
  const handleJoin = () => {
    callUser(joinId)
    navigate('/room')
  }

  return (
    <main className="flex flex-row">
      <section
        className={`bg-home flex ${
          showChat ? 'w-[70%]' : 'w-screen'
        } flex-col items-center justify-center bg-brand_primary_color min-h-screen`}
      >
        <>
          <img src={VoomLogo} alt="logo" width={300} />
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Button
              className="mr-4 md:mr-10"
              size="start"
              variant="start"
              onClick={() => handleStart()}
            >
              <span className="mr-2 text-3xl">
                <IoVideocamOutline />
              </span>
              {startMeetingText}
            </Button>

            <div className="mt-8 flex flex-row md:mt-0">
              <TextInput
                variant="join"
                onChange={(e) => setJoinId(e.target.value)}
              />
              <Button
                variant="join"
                disabled={joinId === '' ? true : false}
                onClick={() => {
                  handleJoin()
                }}
              >
                {joinMeetingText}
              </Button>
            </div>
          </div>
          <p className="text-white text-lg text-center font-primary mt-8">
            {CopyNote}
          </p>
        </>
      </section>
    </main>
  )
}

export default React.memo(Home)
