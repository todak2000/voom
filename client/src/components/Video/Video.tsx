import React, { useContext, useEffect, useRef } from 'react'
import VideoContext from '../../context/VideoContext'
import './Video.css'
import { notification } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import { socket } from '../../context/VideoState'
import Player from './Player'
import Loader from '../Loader/Loader'

const Video: React.FC = () => {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    callEnded,
    msgRcv,
    showChat,
    chat,
    setChat,
    userName,
    myVdoStatus,
    userVdoStatus
  } = useContext(VideoContext)

  socket.on('msgRcv', ({ msg: value, sender }) => {
    const msg: any = {}
    msg.msg = value
    msg.type = 'rcv'
    msg.sender = sender
    msg.timestamp = Date.now()
    setChat([...chat, msg])
  })

  const dummy = useRef<any>()

  useEffect(() => {
    if (dummy?.current) dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  useEffect(() => {
    if (msgRcv?.value && !showChat) {
      notification.open({
        message: '',
        description: `${msgRcv.sender}: ${msgRcv?.value}`,
        icon: <MessageOutlined style={{ color: '#108ee9' }} />
      })
    }
  }, [msgRcv])

  return (
    <div className={`${showChat ? 'grid-70' : 'grid'}  pt-8`}>
      {!stream ? (
        <Loader />
      ) : (
        <Player
          username={myVdoStatus && name}
          userVideoStream={myVideo}
          userVideoStatus={myVdoStatus}
        />
      )}

      {callAccepted && !callEnded && userVideo && (
        <Player
          username={userVdoStatus && (call.name || userName)}
          userVideoStream={userVideo}
          userVideoStatus={userVdoStatus}
        />
      )}
    </div>
  )
}

export default React.memo(Video)
