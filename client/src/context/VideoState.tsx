/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react'
import VideoContext from './VideoContext'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import { message } from 'antd'
import { serverURL } from '../constant'


export const socket = io(serverURL)

const VideoState: React.FC = ({ children }) => {
  //call
  const [callAccepted, setCallAccepted] = useState<boolean>(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState<MediaStream | any>(null)
  const [call, setCall] = useState<object | any>({})
  const [me, setMe] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [otherUser, setOtherUser] = useState<string>('')

  //chat
  const [chat, setChat] = useState<any[]>([])
  const [name, setName] = useState<string | any>('')
  const [msgRcv, setMsgRcv] = useState<object | any>()
  const [showChat, setShowChat] = useState<boolean>(false)
  const [showMobileChat, setShowMobileChat] = useState<boolean>(false)

  //media
  const [myVdoStatus, setMyVdoStatus] = useState<boolean>(true)
  const [userVdoStatus, setUserVdoStatus] = useState<boolean>(false)
  const [myMicStatus, setMyMicStatus] = useState<boolean>(true)
  const [userMicStatus, setUserMicStatus] = useState<boolean>(false)
  const [screenShare, setScreenShare] = useState<boolean>(false)

  // refs
  const myVideo = useRef<any>()
  const userVideo = useRef<any>()
  const connectionRef = useRef<any>()
  const screenTrackRef = useRef<any>()

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream)
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream
        }
      })
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'))
    }
    socket.on('me', (id) => setMe(id))
    socket.on('endCall', () => {
      window.location.reload()
    })

    socket.on('updateUserMedia', ({ type, currentMediaStatus }) => {
      if (currentMediaStatus !== null || currentMediaStatus.length > 0) {
        switch (type) {
          case 'video':
            setUserVdoStatus(currentMediaStatus)
            break
          case 'mic':
            setUserMicStatus(currentMediaStatus)
            break
          default:
            setUserMicStatus(currentMediaStatus[0])
            setUserVdoStatus(currentMediaStatus[1])
            break
        }
      }
    })

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal })
    })

    socket.on('msgRcv', ({ msg: value, sender }) => {
      setMsgRcv({ value, sender })
      setTimeout(() => {
        setMsgRcv({})
      }, 2000)
    })
  }, [])

  const answerCall = () => {
    setCallAccepted(true)
    setOtherUser(call?.from)
    const peer = new Peer({ initiator: false, trickle: false, stream })

    peer.on('signal', (data: any) => {
      socket.emit('answerCall', {
        signal: data,
        to: call.from,
        userName: name,
        type: 'both',
        myMediaStatus: [myMicStatus, myVdoStatus]
      })
    })

    peer.on('stream', (currentStream: any) => {
      userVideo.current.srcObject = currentStream
    })

    peer.signal(call.signal)

    connectionRef.current = peer
    console.log(connectionRef.current)
  }

  const callUser = (id: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })
    setOtherUser(id)

    peer.on('signal', (data: any) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name
      })
    })

    peer.on('stream', (currentStream: any) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream
      }
    })

    socket.on('callAccepted', ({ signal, userName }) => {
      setCallAccepted(true)
      setUserName(userName)
      peer.signal(signal)
      socket.emit('updateMyMedia', {
        type: 'both',
        currentMediaStatus: [myMicStatus, myVdoStatus]
      })
    })

    connectionRef.current = peer
  }

  const updateVideo = () => {
    setMyVdoStatus((currentStatus) => {
      socket.emit('updateMyMedia', {
        type: 'video',
        currentMediaStatus: !currentStatus
      })
      stream.getVideoTracks()[0].enabled = !currentStatus
      return !currentStatus
    })
  }

  const updateMic = () => {
    setMyMicStatus((currentStatus) => {
      socket.emit('updateMyMedia', {
        type: 'mic',
        currentMediaStatus: !currentStatus
      })
      stream.getAudioTracks()[0].enabled = !currentStatus
      return !currentStatus
    })
  }

  //SCREEN SHARING
  const handleScreenSharing = () => {
    if (!myVdoStatus) {
      message.error('Turn on your video to share the content', 2)
      return
    }

    if (!screenShare) {
      navigator.mediaDevices
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .getDisplayMedia({ cursor: true })
        .then((currentStream) => {
          const screenTrack = currentStream.getTracks()[0]

          connectionRef.current.replaceTrack(
            connectionRef.current.streams[0]
              .getTracks()
              .find((track: any) => track.kind === 'video'),
            screenTrack,
            stream
          )

          // Listen click end
          screenTrack.onended = () => {
            connectionRef.current.replaceTrack(
              screenTrack,
              connectionRef.current.streams[0]
                .getTracks()
                .find((track: any) => track.kind === 'video'),
              stream
            )

            myVideo.current.srcObject = stream
            setScreenShare(false)
          }

          myVideo.current.srcObject = currentStream
          screenTrackRef.current = screenTrack
          setScreenShare(true)
        })
        .catch((error: any) => {
          console.log('No stream for sharing', error)
        })
    } else {
      screenTrackRef.current.onended()
    }
  }

  //full screen
  const fullScreen = (e: any) => {
    const elem = e.target

    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen()
    }
  }

  const leaveCall = () => {
    setCallEnded(true)
    connectionRef.current.destroy()
    socket.emit('endCall', { id: otherUser })
  }

  const leaveCall1 = () => {
    socket.emit('endCall', { id: otherUser })
  }
  const sendMsg = (value: string) => {
    socket.emit('msgUser', { name, to: otherUser, msg: value, sender: name })
    const msg: any = {}
    msg.msg = value
    msg.type = 'sent'
    msg.timestamp = Date.now()
    msg.sender = name
    setChat([...chat, msg])
  }

  return (
    <VideoContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        sendMsg,
        msgRcv,
        chat,
        setChat,
        showChat,
        setShowChat,
        setMsgRcv,
        otherUser,
        setOtherUser,
        leaveCall1,
        showMobileChat,
        setShowMobileChat,
        userName,
        myVdoStatus,
        setMyVdoStatus,
        userVdoStatus,
        setUserVdoStatus,
        updateVideo,
        myMicStatus,
        userMicStatus,
        updateMic,
        screenShare,
        handleScreenSharing,
        fullScreen
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoState
