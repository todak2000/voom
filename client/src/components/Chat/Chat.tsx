import React, { useContext, useEffect, useState, useRef } from 'react'
import VideoContext from '../../context/VideoContext'
import { notification } from 'antd'
import TextInput from '../TextInput/TextInput'
import Msg_Illus from '../../assests/msg_illus.svg'

import Button from '../buttons/Button'

import { MessageOutlined } from '@ant-design/icons'
import { AiFillCloseCircle } from 'react-icons/ai'
import { socket } from '../../context/VideoState'
import { sendChatBtnText } from '../../constant'
const Chat: React.FC = () => {
  const {
    sendMsg: sendMsgFunc,
    msgRcv,
    showChat,
    setShowChat,
    chat,
    showMobileChat,
    setShowMobileChat,
    setChat
  } = useContext(VideoContext)

  const [sendMsg, setSendMsg] = useState<string>('')

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

  const sendMessage = (value: string) => {
    if (value && value.length) sendMsgFunc(value)
    setSendMsg('')
  }

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
    <div className="relative">
      {chat.length ? (
        <div className="sm:min-h-[45vh] h-[30vh] mt-8 flex flex-col items-start overflow-y-scroll">
          {chat.map((msg) => (
            <div key={msg} className={msg.type === 'sent' ? 'msg-sent' : 'msg-recieved'}>
              {msg.msg}
            </div>
          ))}
          <div ref={dummy} className="border-0"></div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center">
          <img src={Msg_Illus} alt="msg_illus" className="img_illus" />
        </div>
      )}

      <div className="flex flex-row items-center justify-center my-4 sm:my-0 sm:h-[15vh]">
        <TextInput
          variant="join"
          placeholder="Enter your message here"
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
        />
        <Button
          variant="join"
          onClick={() => {
            sendMessage(sendMsg)
          }}
        >
          {sendChatBtnText}
        </Button>
      </div>
      <Button
        variant="neutral"
        onClick={() => {
          if (window.innerWidth > 425) {
            setShowChat(!showChat)
          } else {
            setShowMobileChat(!showMobileChat)
          }
        }}
        className="absolute top-2 sm:top-[-1rem] sm:right-[-3rem] right-[-1rem]"
      >
        <AiFillCloseCircle className="mr-2 text-red-300 text-2xl" />
      </Button>
    </div>
  )
}

export default Chat
