import React from 'react'
import './ProfilePic.css'

export const ProfilePic = ({imgUrl}) => {
  return (
    <div className='pic-container'>
        <img src={imgUrl}></img>
    </div>
  )
}
