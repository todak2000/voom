import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  ReactElement
} from 'react'
import { Modal, message } from 'antd'
import Phone from '../../assests/phone.gif'
import Teams from '../../assests/teams.mp3'
import Button from '../buttons/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import VideoContext from '../../context/VideoContext'
import TextInput from '../TextInput/TextInput'
import { HiPhoneMissedCall } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'
import { MdOutlineScreenShare, MdAddCall } from 'react-icons/md'
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsArrowUpRightCircleFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill
} from 'react-icons/bs'
import { FiCopy, FiShare2, FiPhoneCall, FiEdit3 } from 'react-icons/fi'
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton
} from 'react-share'
import { useNavigate } from 'react-router-dom'

const Options = (): ReactElement => {
  const navigate = useNavigate()
  const [share, setShare] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [isName, setIsName] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const Audio = useRef<any>()
  const {
    call,
    callAccepted,
    name,
    setName,
    stream,
    callEnded,
    me,
    updateMic,
    leaveCall,
    answerCall,
    setOtherUser,
    leaveCall1,
    updateVideo,
    myMicStatus,
    myVdoStatus,
    handleScreenSharing,
    showChat,
    setShowChat,
    showMobileChat,
    setShowMobileChat
  } = useContext(VideoContext)

  useEffect(() => {
    if (isModalVisible) {
      Audio?.current?.play()
    } else Audio?.current?.pause()
  }, [isModalVisible])

  const showModal = (showVal: boolean) => {
    setIsModalVisible(showVal)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    leaveCall1()
    navigate('/room')
  }
  const endCall = () => {
    console.log('end meeting')
    navigate('/')
    leaveCall()
  }
  useEffect(() => {
    if (call.isReceivingCall && !callAccepted) {
      setIsModalVisible(true)
      setOtherUser(call.from)
    } else setIsModalVisible(false)
  }, [call.isReceivingCall])

  return (
    <div className="flex flex-col my-4 mx-auto w-full md:w-2/3 bg-transparent py-2 px-4 rounded-sm">
      {stream && (
        <div className="flex flex-row justify-evenly items-center mt-2 w-full">
          <div
            className={`${!myMicStatus ? 'icon-active' : 'icon'}`}
            onClick={() => updateMic()}
            tabIndex={0}
          >
            {myMicStatus ? (
              <BsFillMicFill className="text-xl text-brand_primary_color" />
            ) : (
              <BsFillMicMuteFill className="text-white text-xl" />
            )}
          </div>

          {callAccepted && !callEnded && (
            <div
              className={`${showChat ? 'icon-active' : 'icon'}`}
              onClick={() => {
                if (window.innerWidth > 425) {
                  setShowChat(!showChat)
                } else {
                  setShowMobileChat(!showMobileChat)
                }
              }}
              tabIndex={0}
            >
              <TbMessages
                className={`${
                  !showChat
                    ? 'text-xl text-brand_primary_color'
                    : 'text-white text-xl'
                }`}
              ></TbMessages>
            </div>
          )}

          {callAccepted && !callEnded && (
            <div
              className="icon"
              onClick={() => {
                handleScreenSharing()
                setIsShare(!isShare)
              }}
              tabIndex={0}
            >
              <MdOutlineScreenShare className="text-xl text-brand_primary_color">
                {' '}
              </MdOutlineScreenShare>
            </div>
          )}

          <div
            className={`${!myVdoStatus ? 'icon-active' : 'icon'}`}
            onClick={() => {
              updateVideo()
            }}
            tabIndex={0}
          >
            {myVdoStatus ? (
              <BsFillCameraVideoFill className="text-xl text-brand_primary_color" />
            ) : (
              <BsFillCameraVideoOffFill className="text-white text-xl" />
            )}
          </div>

          <div
            className="icon"
            onClick={() =>
              message.success('Meeting link code copied successfully!')
            }
            tabIndex={0}
          >
            <CopyToClipboard text={me}>
              <FiCopy className="text-brand_primary_color" />
            </CopyToClipboard>
          </div>
          <div
            className={`icon ${!callEnded ? 'bg-red-500' : 'bg-[#fdfdfd]'}`}
            onClick={() => endCall()}
            tabIndex={0}
          >
            {!callEnded && <FiPhoneCall className="text-white text-xl" />}
          </div>
          <div
            className={`icon ${isName ? 'bg-red-500' : 'bg-[#fdfdfd]'}`}
            onClick={() => setIsName(!isName)}
            tabIndex={0}
          >
            <FiEdit3
              className={
                isName
                  ? 'text-white text-xl'
                  : 'text-brand_primary_color text-xl'
              }
            ></FiEdit3>
          </div>
          <div
            className="icon relative"
            onClick={() => setShare(!share)}
            tabIndex={0}
          >
            <FiShare2 className="text-brand_primary_color" />
            {share && (
              <div className="share_social absolute bottom-[-2rem]">
                <WhatsappShareButton
                  url={`https://video-chat-mihir.vercel.app/`}
                  title={`Join this meeting with the given code "${me}"\n`}
                  separator="Link: "
                  className="share_icon"
                >
                  <WhatsappIcon size={26} round />
                </WhatsappShareButton>
                <FacebookShareButton
                  url={`https://video-chat-mihir.vercel.app/`}
                  title={`Join this meeting with the given code "${me}"\n`}
                  className="share_icon"
                >
                  <FacebookIcon size={26} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://video-chat-mihir.vercel.app/`}
                  title={`Join this meeting with the given code  "${me}"\n`}
                  className="share_icon"
                >
                  <TwitterIcon size={26} round className="share_border" />
                </TwitterShareButton>
              </div>
            )}
          </div>
        </div>
      )}

      {!isName && (
        <div className="flex flex-row items-center justify-center mt-4">
          <TextInput
            variant="neutral"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              localStorage.setItem('name', e.target.value)
            }}
          />
          <BsArrowUpRightCircleFill
            className="text-2xl sm:text-4xl text-white"
            onClick={() => setIsName(true)}
          />
        </div>
      )}

      {call.isReceivingCall && !callAccepted && (
        <>
          <audio src={Teams} loop ref={Audio} />
          <Modal
            title="Incoming Participant"
            open={isModalVisible}
            onOk={() => showModal(false)}
            onCancel={handleCancel}
            footer={null}
          >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h1 className="header-text">
                {call.name} want to join you:{' '}
                <img
                  src={Phone}
                  alt="phone ringing"
                  className="phone"
                  style={{ display: 'inline-block' }}
                />
              </h1>
            </div>
            <div className="flex flex-row justify-around mt-4">
              <Button
                variant="allow"
                onClick={() => {
                  answerCall()
                  Audio.current.pause()
                }}
                className=""
              >
                <MdAddCall className="mr-2 text-white text-lg" />
                Allow
              </Button>
              <Button
                variant="reject"
                onClick={() => {
                  setIsModalVisible(false)
                  Audio.current.pause()
                }}
                className=""
              >
                <HiPhoneMissedCall className="mr-2 text-white text-lg" />
                Reject
              </Button>
            </div>
          </Modal>
        </>
      )}
    </div>
  )
}

export default Options
