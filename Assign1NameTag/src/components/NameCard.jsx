import React from 'react'
import { ProfilePic } from './ProfilePic'
import './NameCard.css'

export const NameCard = ({imgUrl, fName, lName, email}) => {
  return (
    <div className="grid-container">
        <ProfilePic imgUrl={imgUrl} />
        <ul>
            <li id="id-name">{fName} {lName}</li>
            <li id="id-email">{email}</li>
        </ul>
    </div>
  )
}

