import React, { useContext } from 'react'
import VideoContext from '../../context/VideoContext'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { BsMicMuteFill } from 'react-icons/bs'

type PlayerProps = {
  username: string | boolean
  userVideoStream: any
  userVideoStatus: boolean
}

const Player: React.FC<PlayerProps> = ({
  username,
  userVideoStream,
  userVideoStatus
}) => {
  const { name, fullScreen, userMicStatus } = useContext(VideoContext)

  return (
    <div style={{ textAlign: 'center' }} className="video-card text-center">
      <h3 className="font-secondary text-white text-2xl">{username}</h3>
      <div className="video-inner">
        <video
          playsInline
          muted
          onClick={fullScreen}
          ref={userVideoStream}
          autoPlay
          className="bg-black w-full h-[300px]"
          style={{
            opacity: `${userVideoStatus ? '1' : '0'}`
          }}
        />
        <Avatar
          className="bg-brand_primary_color absolute"
          style={{
            opacity: `${userVideoStatus ? '-1' : '2'}`
          }}
          size={98}
          icon={!username && <UserOutlined />}
        >
          {name}
        </Avatar>
        {!userMicStatus && (
          <BsMicMuteFill className="text-xl absolute top-0 left-2 text-red-500" />
        )}
      </div>
    </div>
  )
}

export default React.memo(Player)
