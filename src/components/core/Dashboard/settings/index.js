import React from 'react'
import EditProfile from './EditProfile'
import ChangeProfilePicture from './ChangeProfilePicture'
import DeleteAccount from './DeleteAccount'

const Settings = () => {
  return (
  <>
  <h1 className='mt-4  mb-6 font-bold text-2xl'>
      Edit Profile
  </h1>
  <ChangeProfilePicture/>
  <EditProfile/>
  <DeleteAccount/>
  </>
  )
}

export default Settings
