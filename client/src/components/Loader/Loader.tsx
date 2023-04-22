import React from 'react'
const Loader: React.FC = () => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default React.memo(Loader)
