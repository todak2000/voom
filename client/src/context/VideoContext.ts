import React, { createContext } from 'react'

interface VideoContextProps {
  // define props

  call: object | any
  callAccepted: boolean
  myVideo: any
  userVideo: any
  stream: MediaStream | any
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  callEnded: boolean
  me: string
  showChat: boolean
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>
  showMobileChat: boolean
  setShowMobileChat: React.Dispatch<React.SetStateAction<boolean>>
  callUser: (id: string) => void
  leaveCall: () => void
  answerCall: () => void
  sendMsg: (value: string) => void
  msgRcv: object | any
  chat: any[]
  setChat: React.Dispatch<React.SetStateAction<any[]>>
  setMsgRcv: React.Dispatch<React.SetStateAction<object>>
  otherUser: string
  setOtherUser: React.Dispatch<React.SetStateAction<string>>
  leaveCall1: () => void
  userName: string
  myVdoStatus: boolean
  setMyVdoStatus: React.Dispatch<React.SetStateAction<boolean>>
  userVdoStatus: boolean
  setUserVdoStatus: React.Dispatch<React.SetStateAction<boolean>>
  updateVideo: () => void
  myMicStatus: boolean
  userMicStatus: boolean
  updateMic: () => void
  screenShare: boolean
  handleScreenSharing: () => void
  fullScreen: (e: React.SyntheticEvent<Element>) => void
}

const VideoContext = createContext<VideoContextProps>({
  // define default values
  call: {},
  callAccepted: false,
  myVideo: null,
  userVideo: null,
  stream: null,
  name: '',
  setName: () => null,
  callEnded: false,
  me: '',
  callUser: () => null,
  leaveCall: () => null,
  answerCall: () => null,
  sendMsg: () => null,
  msgRcv: {},
  chat: [],
  setChat: () => null,
  setMsgRcv: () => null,
  otherUser: '',
  setOtherUser: () => null,
  leaveCall1: () => null,
  userName: '',
  showChat: false,
  setShowChat: () => null,
  showMobileChat: false,
  setShowMobileChat: () => null,
  myVdoStatus: false,
  setMyVdoStatus: () => null,
  userVdoStatus: false,
  setUserVdoStatus: () => null,
  updateVideo: () => null,
  myMicStatus: false,
  userMicStatus: false,
  updateMic: () => null,
  screenShare: false,
  handleScreenSharing: () => null,
  fullScreen: () => null
})

export default VideoContext
